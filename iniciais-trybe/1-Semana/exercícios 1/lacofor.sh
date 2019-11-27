#!/bin/bash

arquivo=/home/lucaswerner/Trybe/exercicios-sh/lista.txt

for coco in `cat $arquivo`
do 
    echo $coco
done

