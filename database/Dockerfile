FROM node:current-alpine3.19
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["./node_modules/node-pg-migrate/bin/node-pg-migrate", "up"]
