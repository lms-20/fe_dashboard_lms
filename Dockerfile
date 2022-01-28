# FROM node:14-alpine AS development
# ENV NODE_ENV development
# Add a work directory
# WORKDIR /app
# Cache and Install dependencies
# COPY package.json .
# COPY yarn.lock .
# RUN yarn install
# Copy app files
# COPY . .
# Expose port
# EXPOSE 3000
# Start the app
# CMD [ "yarn", "start" ]

# FROM node:14-alpine AS builder
# ENV NODE_ENV production
# # Add a work directory
# WORKDIR /app
# # Cache and Install dependencies
# COPY package.json .
# # COPY yarn.lock .
# RUN npm install --production
# # Copy app files
# COPY . .
# # Build the app
# RUN npm run build

# # Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production
# # Copy built assets from builder
# COPY --from=builder /app/build /usr/share/nginx/html
# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# # Expose port
# EXPOSE 80
# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:12-alpine as builder

# # create the app directory
# WORKDIR /usr/src/app

# # copy the dependencies package into the app directory
# COPY package.json .

# # install the dependencies
# RUN npm cache clean --force
# RUN npm cache verify
# RUN npm install

# # copy the app into the app directory
# COPY . .

# # copy file env to env root
# # COPY /env/config_staging.sample-env .env.production

# # build the app
# RUN npm run build

# FROM nginx:alpine 

# # copy the built directory to nginx image
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

#WIDI
FROM node:15-alpine AS builder

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]