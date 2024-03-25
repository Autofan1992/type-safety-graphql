FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run db:migrate && npm run db:seed && npm run build && node ./dist/src/index.js"]