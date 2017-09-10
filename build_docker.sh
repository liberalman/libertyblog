#!/bin/sh

if [ ! -d "/var/coreseek/" ]; then
    mkdir /var/coreseek/
fi
if [ ! -d "/var/coreseek/log" ]; then
    mkdir /var/coreseek/log
fi
if [ ! -d "/var/coreseek/data" ]; then
    mkdir /var/coreseek/data
fi

git pull

docker-compose down

docker rm `docker ps -a -q` -f

docker rmi $(docker images -f "dangling=true" -q) -f

docker run -it -v /data/gocode:/data/gocode -e GOPATH=/data/gocode --rm demo/go-build:latest /bin/bash -c "cd /data/gocode/src/libertyblog && go build"

docker build -t liberalman/libertyblog .

docker-compose up -d

