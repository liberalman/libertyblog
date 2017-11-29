FROM alpine:latest

MAINTAINER libertyblog <www.hicool.top>

RUN apk add --update bash ca-certificates && \
    rm -rf /var/cache/apk/*

WORKDIR /data
COPY libertyblog /data/
RUN mkdir -p /data/conf/
RUN mkdir -p /data/log/

ENV PATH $PATH:/data/

ENTRYPOINT ["./libertyblog"]

