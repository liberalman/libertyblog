#!/bin/bash
groupadd consul
useradd -g consul consul
mkdir /var/consul
chown consul:consul /var/consul -R
cp consul.service /lib/systemd/system/

