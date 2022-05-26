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
# RUN pip uninstall protobuf
RUN pip install protobuf==3.20.1
RUN python -m nltk.downloader punkt
# RUN mkdir data/tuples
