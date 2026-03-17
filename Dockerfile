FROM node:20-bookworm

# Install dependencies
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package first (for caching)
COPY package*.json ./

# Install node deps
RUN npm install && npm install -g pm2 qrcode-terminal

# Copy rest of files
COPY . .

# Expose port
EXPOSE 5000

# Start app with pm2 (optional but better)
CMD ["pm2-runtime", "start", "npm", "--", "start"]
