#!/bin/bash
su
mkdir /home/nodered
chmod 777 /home/nodered
mkdir /home/nodered/.node-red
chmod 777 /home/nodered/.node-red
cd /home/nodered/.node-red
npm install node-red-dashboard
