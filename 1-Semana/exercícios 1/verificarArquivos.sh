#!/bin/bash

arquivo1="comparacaoNumerica.sh"

if [ -e $arquivo1 ]
then
    echo "$arquivo1 existe"
else   
    echo "não existe"
fi
