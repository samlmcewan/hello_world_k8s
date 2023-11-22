FROM node:20-alpine
WORKDIR /opt/service
COPY . .
CMD ["node", "dist/app.js"]
EXPOSE 3000