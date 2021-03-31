FROM node:14.16.0-alpine3.11

RUN apk add --no-cache bash

# eu estou executando essa linha antes de definir o usuário porque aqui eu
# ainda estou como root
RUN yarn global add @nestjs/cli@7.4.1

USER node

WORKDIR /home/node/app
