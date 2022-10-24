FROM node:16.14.0

WORKDIR /code

RUN mkdir -p /node_modules && chown -R node:node /node_modules
COPY --chown=node:node . .

COPY package*.json tsconfig.json yarn* ./

RUN yarn install
RUN yarn global add prisma nodemon


COPY . .

EXPOSE 4000

CMD nodemon