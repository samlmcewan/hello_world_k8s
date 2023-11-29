FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
COPY src/ ./src/
COPY tsconfig.json ./
RUN npm install && npm run build

CMD ["node", "dist/app.js"]
EXPOSE 3000