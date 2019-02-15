.DEFAULT_GOAL := help
DETACHED = 
NETWORK_NAME = host
NETWORK = 
NAME=
HOST=

image:
	docker build -t jjhoncv/node:9.11.1 docker/node

run:
	docker run $(DETACHED) $(NETWORK) $(NAME) $(HOST) -it --rm -u $$(id -u):$$(id -g) $(PORT) -v $(PWD):/app -w /app/$(PROJECT) jjhoncv/node:9.11.1 $(NODE_COMMAND)

define create-network
	$(eval ID_NETWORK := $(shell docker network ls | grep $(NETWORK_NAME) | awk '{print $$1}'))
	@if [ ! $(ID_NETWORK) ]; then docker network create $(NETWORK_NAME); fi
endef

install-client:
	@make run \
	PROJECT='client' \
	NODE_COMMAND='npm install'

install-server:
	@make run \
	PROJECT='server' \
	NODE_COMMAND='npm install'
	$(call create-network)

watch-server:
	@make run \
	PROJECT='server' \
	DETACHED='-d' \
	NETWORK='--network $(NETWORK_NAME)' \
	NODE_COMMAND='npm run serve' \
	PORT='-p 3000:3000'

watch-client:
	@make run \
	PROJECT='client' \
	DETACHED='-d' \
	NETWORK='--network $(NETWORK_NAME)' \
	NODE_COMMAND='npm run start' \
	PORT='-p 3131:3131'

up:
	@make install-client
	@make install-server
	@make watch-server
	@make watch-client

install:
	@make install-client
	@make install-server

watch:
	@make watch-server
	@make watch-client

build:
	@make run \
	NODE_COMMAND='yarn build $(TASK)'

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
