# Pull base image
FROM node:16

# Set working directory
WORKDIR /home/node/app

# Copy package-lock.json & package.json to working directory
COPY ./package-lock.json .
COPY ./package.json .

# Install dependencies
RUN npm install

# Install serve
RUN npm i -g serve

# Copy files to working directory
COPY ./ .

# Build react app
RUN npm run build

# Serve app
ENTRYPOINT [ "serve", "-s", "build", "-l", "80" ]