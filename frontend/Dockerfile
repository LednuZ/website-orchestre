FROM node:20-alpine

WORKDIR /app

# Copy package requirements
COPY package*.json ./

# Install dependencies inside Linux container
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
