FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy app sources
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY src/ ./src

# Install app dependencies
RUN npm install

# Tell docker that app runs on port 8080
EXPOSE 8080

# run app
CMD [ "node", "src/server.js" ]