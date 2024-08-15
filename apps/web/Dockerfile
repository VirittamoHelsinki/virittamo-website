# Use the Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install any required system dependencies
RUN apk add --no-cache libc6-compat openssl

# Copy the package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Set the environment to production
ENV NODE_ENV production
ENV PORT 3000

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
