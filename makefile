SHELL := /bin/bash
build:
	docker-compose build plagon
dev:
	docker-compose run --rm plagon bash
