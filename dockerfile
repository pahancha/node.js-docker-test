FROM node:18-alpine

WORKDIR /app

#Installing application dependencies
COPY package*json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]