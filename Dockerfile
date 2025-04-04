# Use Node.js image
FROM node:18

# Install Java JDK
RUN apt update && apt install -y default-jdk

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the backend port
EXPOSE 8000

# Run the app
CMD ["node", "server.js"]
