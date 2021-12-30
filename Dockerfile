FROM node:14.17.5-alpine3.14
WORKDIR /app
COPY . .
RUN yarn install  ## các bạn có thể dùng yarn install .... tuỳ nhu cầu nhé
RUN yarn run build
CMD [ "yarn", "start" ]