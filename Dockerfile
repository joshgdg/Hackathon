FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN apt-get update && apt-get install -y cron certbot
CMD certbot certonly --webroot --agree-tos --email <your email> -d <your domain name> -w public --keep-until-expiring --no-eff-email --pre-hook "node test-app-http.js" --post-hook "node test-app-https.js" --test-cert && node test-app-https.js
