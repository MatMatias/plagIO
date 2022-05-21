FROM bitnami/pytorch:latest
USER root
WORKDIR /app
COPY ./ ./
