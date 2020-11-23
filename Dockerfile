FROM node:13.12.0-alpine as build-step

RUN mkdir /app
WORKDIR /app

# Installing dependencies
COPY package.json yarn.lock /app/
RUN yarn install

# Copying source files
COPY . /app

# Building app
RUN yarn run build

# Running the app
CMD [ "npm", "start" ]
