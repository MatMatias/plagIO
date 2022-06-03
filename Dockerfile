FROM bitnami/pytorch:1.10.1
LABEL authors="SamuraX <https://github.com/MatMatias>"
USER root
WORKDIR /app
COPY ./ ./


RUN apt-get update
RUN apt-get -y install sqlite3
RUN apt-get -y install wget 
RUN pip install nltk
RUN pip install skipthoughts
RUN pip install certifi==2022.5.18.1
RUN pip install tensorflow==1.13.2
RUN pip install numpy scipy matplotlib ipython jupyter pandas sympy nose 
RUN pip install protobuf==3.20.1
RUN python -m nltk.downloader punkt

RUN cd ./data/skipthoughts
# RUN wget http://www.cs.toronto.edu/~rkiros/models/dictionary.txt http://www.cs.toronto.edu/~rkiros/models/utable.npy http://www.cs.toronto.edu/~rkiros/models/btable.npy http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz http://www.cs.toronto.edu/~rkiros/models/uni_skip.npz.pkl http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz http://www.cs.toronto.edu/~rkiros/models/bi_skip.npz.pkl
RUN cd /app
