FROM node:23-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 4200
CMD ["ng", "serve"]
