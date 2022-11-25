FROM node:lts-alpine

RUN mkdir -p /app/ec2-research
WORKDIR /app/ec2-research

COPY package*.json ./
RUN npm install
COPY . . 

EXPOSE 8080

CMD ["node", "dist/index.js"]