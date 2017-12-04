#!/bin/sh

function check_env()
{
    if [ ! -d "/var/coreseek/" ]; then
        mkdir /var/coreseek/
    fi
    if [ ! -d "/var/coreseek/log" ]; then
        mkdir /var/coreseek/log
    fi
    if [ ! -d "/var/coreseek/data" ]; then
        mkdir /var/coreseek/data
    fi
}


function clean()
{
    docker rmi $(docker images -f "dangling=true" -q) -f
}

function Usage()
{
    echo "Usage: $0 build|recreate|clean"
    exit -1
}

function check_services()
{
    arr=("loadbalancer database registrator consul-server registrator sphinx")
    for service in ${arr[@]};do
        echo $service
        exist=`docker-compose ps|grep $service|grep Up`
        if [ "" == "$exist" ]; then
            # not exist
            docker-compose start $service
        fi
    done
}

function build()
{
    git pull
    docker-compose stop web
expect > /dev/null <<END
spawn docker-compose rm web
expect "Are you sure" {
    send "y\r"
}
END
    docker run -it -v /data/gocode:/data/gocode -e GOPATH=/data/gocode --rm demo/go-build:latest /bin/bash -c "cd /data/gocode/src/libertyblog && go build"
    docker build -t liberalman/libertyblog .
    #docker-compose build web
    #docker-compose star web
    docker-compose up --no-recreate -d
}

function recreate()
{
    docker-compose down
    docker rm `docker ps -a -q` -f
    docker-compose up -d
    exit 0
}

if [ $# -ne 0 ]; then
case $1 in
    "build")
        build;
        ;;
    "recreate")
        recreate;
        ;;
    "clean")
        clean;
        ;;
    *)
        Usage
esac
fi

clean
check_env
check_services

