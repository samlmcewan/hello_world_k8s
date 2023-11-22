FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npx tsc
CMD ["node", "dist/app.js"]
EXPOSE 3000