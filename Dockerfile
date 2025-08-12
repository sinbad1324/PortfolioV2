FROM node:24-alpine3.21
WORKDIR /app
COPY ./Portfolio ./
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
