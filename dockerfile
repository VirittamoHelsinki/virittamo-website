FROM node:lts

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

# Install pnpm globally (if not already installed)
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of your application code into the container
COPY . .

EXPOSE 5173

# Build your application (adjust this command based on your project)
RUN pnpm run build

# Command to start your application
CMD ["pnpm", "dev"]
