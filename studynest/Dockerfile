FROM node:20 as build
WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . . 
ENV VITE_API_URL http://api.voyaging-volumes.duckdns.org
RUN npm run build

FROM nginx:latest 

COPY ../default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]