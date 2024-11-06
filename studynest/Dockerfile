FROM node:20-alpine AS builder
WORKDIR /app/studynest
COPY ./package*.json . 
RUN NODE_ENV=development npm i
COPY . .
# ARG VITE_CERT
# ENV VITE_URL "https://api.projectplaylist.duckdns.org"

RUN npm run build

FROM nginx:1.27.0
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

# COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# FROM node:20 as build
# WORKDIR /app

# COPY ./package*.json ./
# RUN npm install
# COPY . . 
# # ENV VITE_API_URL http://api.voyaging-volumes.duckdns.org
# RUN npm run build

# FROM nginx:latest 


# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*

# COPY default.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/dist .
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]