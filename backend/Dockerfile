FROM node:16-alpine

RUN apk add --no-cache mysql-client

WORKDIR /app/backend/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]