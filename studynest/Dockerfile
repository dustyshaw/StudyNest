FROM node:20-alpine AS builder
WORKDIR /app
COPY ./package*.json . 
RUN NODE_ENV=development npm i
COPY . .

ENV VITE_URL="https://api.studynest.duckdns.org"

# This also lints
RUN npm run build
RUN npm test


FROM nginx:1.27.0
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html


ENTRYPOINT ["nginx", "-g", "daemon off;"]
