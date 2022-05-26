SHELL := /bin/bash
getstfiles:
	mkdir -p ./data/skip-thoughts/ && cd ./data/skip-thoughts
	wget http://www.cs.toronto.edu/~rkiros/models/dictionary.txt http://www.cs.toronto.edu/~rkiros/models/utable.npy http://www.cs.toronto.edu/~rkiros/models/btable.npy http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz.pkl http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz.pkl  
	cd ../..
build:
	docker-compose build plagon
dev:
	docker-compose run --rm plagon bash
