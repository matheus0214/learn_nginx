FROM node:12.19.0-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN npm install --silent

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]