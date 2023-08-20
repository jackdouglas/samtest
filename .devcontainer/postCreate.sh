#!/bin/bash
cd
wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
unzip aws-sam-cli-linux-x86_64.zip -d sam-installation
rm aws-sam-cli-linux-x86_64.zip
./sam-installation/install
rm -rf ./sam-installation