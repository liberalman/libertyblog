#!/bin/bash

# =======================================
# Settings
# =======================================

APP=libertyblog
APP_DIR=./
LOG_DIR=./
PID_FILE=$APP_DIR/pid
#ps -ef|grep libertyblog|grep -v grep|awk '{print $2'}|xargs kill -9
# =======================================
# DO NOT CHANGE
# =======================================


# source function library
. /etc/rc.d/init.d/functions

RETVAL=0

start() {
    run_cmd="$APP_DIR/libertyblog"
    taskset -c 0,15 nohup $run_cmd 2>&1 >> $LOG_DIR/stdout.log &
    echo $! > "$PID_FILE"
    success && echo "Starting $APP..."	
}

stop() {
   pid=$(cat $PID_FILE 2>/dev/null)
   if checkpid $pid; then
    kill "$pid" 2>/dev/null
    timeout=30
    while checkpid $pid; do
      if (( timeout-- == 0 )); then
        kill -KILL "$pid" 2>/dev/null
      fi
      sleep 1
    done
    success
  else
    failure
  fi
  echo "Stopping $APP..."
}

restart() {
  stop
  start
}

case "$1" in
  start)
  start
  ;;
  stop)
  stop
  ;;
  restart|force-reload|reload)
  restart
  ;;
  status)
  status -p $PID_FILE
  RETVAL=$?
  ;;
  *)
  echo $"Usage: $0 {start|stop|status|restart|reload|force-reload}"
  exit 1
esac

exit $RETVAL

