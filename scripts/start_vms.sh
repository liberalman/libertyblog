#!/bin/sh

# use in vbox of mac

### BEGIN INIT INFO
# Provides: VBOXWEBSRV
# Required-Start: $network $remote_fs $syslog $time
# Required-Stop:
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: VBOXWEBSRV
### END INIT INFO

vboxwebsrv -b

# start vms
index=0
for vm in `vboxmanage list vms`
do
    if [ `expr $index % 2` -eq 0 ];
    then
        echo $vm
    else
        vboxmanage startvm $vm --type headless
    fi;
    index=`expr $index + 1`
    echo $vm
done

