# Pull base image
FROM node:16

# Set working directory
WORKDIR /home/node/app

# Install serve
RUN yarn global add serve

# Copy package-lock.json & package.json to working directory
COPY ./package-lock.json .
COPY ./package.json .

# Install dependencies
RUN npm install

# Copy files to working directory
COPY ./ .

# Build react app
RUN npm run build

# Serve app
ENTRYPOINT [ "serve", "-s", "build", "-l", "80" ]
