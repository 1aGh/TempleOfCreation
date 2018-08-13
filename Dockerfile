FROM ubuntu:18.04

#Install Node.js
RUN cd ~
RUN apt update
RUN apt install -y curl
RUN apt install -y gnupg2
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install -y nodejs
RUN apt install -y build-essential

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5111
CMD [ "npm", "start" ]