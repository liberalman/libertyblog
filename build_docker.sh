#!/bin/sh

mkdir /var/coreseek/
mkdir /var/coreseek/log
mkdir /var/coreseek/data

git pull

docker-compose down

docker rm `docker ps -a -q` -f

docker rmi $(docker images -f "dangling=true" -q) -f

docker run -it -v /data/gocode:/data/gocode -e GOPATH=/data/gocode --rm demo/go-build:latest /bin/bash -c "cd /data/gocode/src/libertyblog && go build"

docker build -t liberalman/libertyblog .

docker-compose up -d

