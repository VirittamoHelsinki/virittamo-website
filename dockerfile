FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock for the root project
COPY ["package.json", "yarn.lock", "./"]

# Install project dependencies using Yarn for the root project
RUN yarn install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your application listens on (if needed)
EXPOSE 5175

# Copy the .env file from the "server" directory
COPY ./apps/server/.env ./.env

# Change directory to the "server" directory
WORKDIR /app/apps/server

# Install project dependencies using Yarn for the "server" project
RUN yarn install

# Change directory back to the root project
WORKDIR /app

# Change directory to the "client" directory
WORKDIR /app/apps/client

# Install project dependencies using Yarn for the "client" project
RUN yarn install

# Change directory back to the root project
WORKDIR /app

# Define the command to run your application using Yarn
CMD ["yarn", "run", "dev"]
