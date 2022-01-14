FROM node:14.17.5-alpine3.14
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD [ "yarn", "start" ]