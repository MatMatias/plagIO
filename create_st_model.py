import torch
from torch.autograd import Variable
from torch.nn import CosineSimilarity
import sys
import numpy as np
sys.path.append('skip-thoughts.torch/pytorch')
from skipthoughts import UniSkip

import argparse
from pan_db import PanDatabaseManager
import pickle
from tensorflow.contrib import learn

def get_vocab_processor(sentences, max_document_length):
    vocab_processor = learn.preprocessing.VocabularyProcessor(max_document_length, min_frequency=0)
    vocab_processor.fit_transform(sentences)
    return vocab_processor

# Print iterations progress
# source: https://stackoverflow.com/questions/3173320/text-progress-bar-in-the-console
def printProgressBar (iteration, total, prefix = '', suffix = '', decimals = 1, length = 100, fill = '█', printEnd = "\r"):
    """
    Call in a loop to create terminal progress bar
    @params:
        iteration   - Required  : current iteration (Int)
        total       - Required  : total iterations (Int)
        prefix      - Optional  : prefix string (Str)
        suffix      - Optional  : suffix string (Str)
        decimals    - Optional  : positive number of decimals in percent complete (Int)
        length      - Optional  : character length of bar (Int)
        fill        - Optional  : bar fill character (Str)
        printEnd    - Optional  : end character (e.g. "\r", "\r\n") (Str)
    """
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filledLength = int(length * iteration // total)
    bar = fill * filledLength + '-' * (length - filledLength)
    print('\r%s |%s| %s%% %s' % (prefix, bar, percent, suffix), end = printEnd)
    # Print New Line on Complete
    if iteration == total: 
        print()

if __name__ == '__main__':
    BATCH_SIZE = 512
    MAX_SENTENCE_LEN = 15

    parser = argparse.ArgumentParser(description='Generates Skip-Thought vectors for sentences.')
    parser.add_argument(
        "--source", 
        help = 'specify which part of the PAN corpus will provide the input sentences', 
        type=str, 
        choices={"train", "test"}, 
        required=True)
    parser.add_argument(
        '--debug',
        action='store_true', 
        help='print debug messages to stderr')
    parser.add_argument(
        '--dest', 
        help = 'destination directory for the sentence vectors to be generated', 
        required = True)

    args = parser.parse_args()

    pandb = PanDatabaseManager()
    ids, sentences = pandb.get_ids_and_contents_of_sentences(args.source)

    vocab_processor = get_vocab_processor(sentences, MAX_SENTENCE_LEN)

    print("Amount of sentence ids: ", len(ids))
    print("Amount of sentences: ", len(sentences))
    print("Vocabulary length = {}".format(len(vocab_processor.vocabulary_)))

    ## Extract 'word --> id' mapping from the object.
    vocab_dict = vocab_processor.vocabulary_._mapping

    sorted_vocab = sorted(vocab_dict.items(), key = lambda x : x[1])

    ## Treat the ids as indices into list and create a list of words in the ascending order of ids,
    ## in such a way that word with id i goes at index i of the list.
    vocabulary = list(list(zip(*sorted_vocab))[0])

    if args.debug:
        print("Vocabulary len: ", len(vocabulary))

    dir_st = args.dest

    print("Creating skip-thoughts model...")
    uniskip = UniSkip(dir_st, vocabulary)

    print("Creating input to skip-thoughts model...")
    a_list = list(vocab_processor.fit_transform(sentences))
    print("List size: ", len(a_list))
    x = np.array(a_list)

    l = len(sentences)
    print("Dumping sentence vectors to pickle files into directory <%s>..." % dir_st)
    printProgressBar(0, l, prefix = 'Progress:', suffix = 'Complete', length = 50)
    offset = 0
    nb_gen_vectors = 0
    i = 0
    while nb_gen_vectors < len(a_list):
        BATCH_SIZE = len(a_list) - offset if offset + BATCH_SIZE > len(a_list) else BATCH_SIZE
        input = Variable(torch.LongTensor(x[offset:BATCH_SIZE+offset]))
        offset = offset + BATCH_SIZE

        #Applying skip-thoughts model to sentences...
        # output_seq2vec.size() --> [512, 2400]
        # output_seq2vec.size(0) --> 512
        output_seq2vec = uniskip(input)

        #Saving batch of sentence embeddings to pickle file...
        dbfile = open('st-vectors' + "{:011d}".format(i) + '.pkl', 'wb')
        pickle.dump(output_seq2vec, dbfile)
        dbfile.close()
        i = i + 1    
        nb_gen_vectors = nb_gen_vectors + BATCH_SIZE

        printProgressBar(i + 1, l, prefix = 'Progress:', suffix = 'Complete', length = 50)

    print("Done!")