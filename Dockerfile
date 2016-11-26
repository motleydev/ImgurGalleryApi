FROM mhart/alpine-node:base-6

# Create app directory
RUN mkdir -p /usr/src/app/dist
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --only=production

# Bundle app source
COPY ./dist/ /usr/src/app/dist
COPY ./server.js /usr/src/app

EXPOSE 8080
CMD [ "npm", "serve:dist" ]
