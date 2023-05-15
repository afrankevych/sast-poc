FROM node:18-alpine3.17
WORKDIR /app
COPY ../../.. /app
RUN ls
RUN chmod +x ./bin/scan.sh
CMD ["./bin/scan.sh"]
