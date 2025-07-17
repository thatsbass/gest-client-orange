# Stage 1: Build the TypeScript application
# We use a specific Node.js version for consistency. 'alpine' is a lightweight version.
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies for building
RUN npm ci

# Copy the rest of your application source code
COPY . .

# Compile TypeScript to JavaScript using the script in package.json
RUN npm run build

# Remove development dependencies to reduce the size of the final image
RUN npm prune --production

# Stage 2: Create the final lightweight production image
FROM node:18-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

# Copy the compiled code, production dependencies, and package.json from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./

# Expose the port your app runs on (default is 3000)
EXPOSE 3000

# Command to run the application using the start script
CMD [ "npm", "start" ]

