# Dockerfile  
FROM node:8  
WORKDIR /app  
COPY package.json /app  
RUN npm install  
COPY . /app  
EXPOSE 8089 
CMD node index.js