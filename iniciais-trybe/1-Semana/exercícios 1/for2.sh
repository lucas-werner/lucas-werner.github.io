#!/bin/bash

for item in /home/**
do  
    if [ -d $item ]
    then   
        echo "O $item é um diretório"
    elif [ -f $item ]
    then
        echo "O $item é um arquivo"
    fi 
done

        