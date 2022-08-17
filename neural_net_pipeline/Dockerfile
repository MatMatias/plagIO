FROM bitnami/pytorch:latest
USER root
WORKDIR /app
COPY ./ ./

RUN apt-get update
RUN apt-get -y install sqlite3
RUN apt-get -y install wget 
RUN pip install nltk
RUN pip install skipthoughts
RUN pip install tensorflow==1.13.2
RUN pip install numpy scipy matplotlib ipython jupyter pandas sympy nose 
RUN python -m nltk.downloader punkt
RUN mkdir -p data/skip-thoughts && cd data/skip-thoughts/ 
RUN wget http://www.cs.toronto.edu/~rkiros/models/dictionary.txt http://www.cs.toronto.edu/~rkiros/models/utable.npy http://www.cs.toronto.edu/~rkiros/models/btable.npy http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz.pkl http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz.pkl
RUN cd ../..
RUN mkdir data/tuples
