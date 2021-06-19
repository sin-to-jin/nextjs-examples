FROM node:16-alpine

RUN apk update && apk upgrade && apk add --update --no-cache \
  pixman-dev \
  cairo-dev \
  pango-dev \
  pkgconfig \
  python3 \
  make \
  g++ && \
  rm -rf /var/cache/apk/*

WORKDIR /app
COPY . ./
RUN yarn install

EXPOSE 3000
CMD ["yarn", "dev"]
