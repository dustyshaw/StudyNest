FROM node:20-alpine AS builder
WORKDIR /app
COPY ./package*.json . 
RUN NODE_ENV=development npm i
COPY . .

RUN npm run build
RUN npm run lint

FROM nginx:1.27.0
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

# TODO ADD ENVIRONMENT VARIABLES
# ENV MY_VARIABLE=123
# docker build -t --build-arg TEST_ENV="123" -t .
# COPY default.conf /etc/nginx/conf.d/default.conf for later

ENTRYPOINT ["nginx", "-g", "daemon off;"]
