# Stage 1: Build container
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY src/ ./src/
COPY tsconfig.json ./
RUN npm install && npm run build

# Stage 2: Runtime container
FROM node:20-alpine

WORKDIR /app

# Copy only the built artifacts from the build container
COPY --from=builder /app/dist /app/dist
COPY package*.json ./
RUN npm install --only=production

# Expose the port on which the application will run
EXPOSE 3000

# Specify the command to run on container startup
CMD ["node", "dist/app.js"]
