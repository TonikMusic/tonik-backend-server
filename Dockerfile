# install a light version of node.js 
FROM node:10-slim

# create a directory named app to hold project 
WORKDIR /app

COPY package.json /app

# Copy applicatin to docker 
COPY . /app

# Install Node.js
EXPOSE 8002

# install dependicies 
RUN npm install .



