FROM alpine
RUN apk add --update nodejs nodejs-npm

COPY . .


RUN npm install && npm run build

EXPOSE 5000
ENV HOST=0.0.0.0

CMD [ "npm", "start" ]