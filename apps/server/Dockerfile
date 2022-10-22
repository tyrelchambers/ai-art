FROM node:16.14.0

WORKDIR /code

RUN mkdir -p /node_modules && chown -R node:node /node_modules
COPY --chown=node:node . .

COPY package*.json tsconfig.json ./

RUN npm i
RUN npm install -g prisma nodemon


COPY . .

EXPOSE 4000

CMD nodemon