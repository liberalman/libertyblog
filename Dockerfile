FROM alpine:latest

MAINTAINER libertyblog <www.liberalman.cn>

RUN apk add --update bash && \
    rm -rf /var/cache/apk/*

WORKDIR /data
COPY libertyblog /data/
RUN mkdir -p /data/conf/
RUN mkdir -p /data/log/

ENV PATH $PATH:/data/

ENTRYPOINT ["./libertyblog"]

