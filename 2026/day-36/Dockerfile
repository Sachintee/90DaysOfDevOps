FROM node:22-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install --omit=dev && \
    addgroup -S appgroup && \
    adduser -S appuser -G appgroup

COPY app/ .

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["npm", "start"]