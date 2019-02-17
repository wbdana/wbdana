# Create alias for container built from node:alpine base image
FROM node:alpine as builder

# Set working directory to be same as project on local
WORKDIR "/wbdana"

# Copy package.json from local to container working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy project files from local machine to container working directory
COPY . .

# Create production build
RUN npm run build

# Create a new container from a linux base image that has aws-cli installed
FROM mesosphere/aws-cli

# Using the alias defined for the first container, copy the contents of the build folder to this container
COPY --from=builder /wbdana/build .

# Set the default command of this container to push the files from the working directory of this container to s3 bucket
CMD ["s3", "sync", "./", "s3://wbdana"]