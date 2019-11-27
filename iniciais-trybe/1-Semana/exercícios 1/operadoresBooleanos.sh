#!/bin/bash
# || > ou
# && > e

if [ $USER = lucaswerner ] && [ -x operadores.sh ]
then    
    echo "O usuário é o $USER e tem permissão sobre o arquivo"
else
    echo "Usuário não tem permissão"
fi