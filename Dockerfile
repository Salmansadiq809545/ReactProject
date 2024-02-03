FROM node

WORKDIR /app

COPY package*.json /app/

COPY .firebase /app/

COPY firebase.json /app/

COPY firebaserc /app/

RUN npm install

COPY . .

CMD [ "npm","start" ]

