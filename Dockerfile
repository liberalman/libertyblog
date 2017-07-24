FROM alpine:latest

MAINTAINER libertyblog <www.liberalman.cn>

RUN apk add --update bash && \
    rm -rf /var/cache/apk/*

COPY libertyblog /
RUN mkdir -p /conf/
COPY conf/app.conf conf/
COPY conf/server.crt conf/
COPY conf/server.key conf/

EXPOSE 80

ENTRYPOINT ["libertyblog"]

