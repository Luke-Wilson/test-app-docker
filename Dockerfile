FROM node:argon

#create app directory and set it to the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN apt-get update
RUN apt-get install -y vim

#Bundle app source
COPY . /usr/src/app

#Expose the port that you want to use - It our case it should match the port specified in the server file
EXPOSE 8080
CMD [ "npm", "start"]
