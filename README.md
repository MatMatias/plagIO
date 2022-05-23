# Plagon
Plagiarism identifier


# Documento de instalação e configuração do framework
## Executar os comandos exatamente como estão, passo-a-passo no terminal, dentro da pasta raiz do projeto:

### Criar banco de dados sqlite3 com os artigos:
	- make build
	- make dev
	- apt update
	- apt install sqlite3
	- pip install nltk
	- python
	- import nltk
	- nltk.download()
	- d
	- punkt
	- q
	- exit()
	- python ./src/gen_pandb_train.py --srcdir ./pancorpus/train --destfile ./plag_train.db

### Criar modelo skipthoughts:
	- pip install skipthoughts
	- pip install tensorflow==1.13.2
	- cd data/skip-thoughts
	- wget http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz.pkl http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz.pk
	- cd ../..
	- python ./src/create_st_model.py --pandb plag_train.db --stdir ./data/skip-thoughts/pkl --destdir ./data --vocab ./data/skip-thoughts/dictionary.txt --start 1

### Gerar metadados:
  - pip install numpy scipy matplotlib ipython jupyter pandas sympy nose 
  - python ./src/gen_metadata.py

### Gerar tuplas:
  - python ./src/gen_tuples.py --destdir ./data/tuples
