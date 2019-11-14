#!/bin/bash

echo "Digite o nome do arquivo (com extensão): "
read arquivo
tempoMedio=150 
#tempoMedio = palavras/minuto


if [[ $arquivo == *.txt ]];
then
# contar as palavras e calcular o tempo médio de leitura

    numeropalavras=`wc -w $arquivo | awk '{print $1;}'`
    conta=$[$numeropalavras / $tempoMedio]
    zenity --info --width 300 --text "Considerando o tempo médio de leitura de 150 palavras/minuto, o tempo estimado para a leitura de "$arquivo" é de $conta minutos. Click OK para continuar."
    
elif [[ -z "$arquivo" ]];
then
   zenity --warning --title "Arquivo inválido" --width 300 --text "Por gentileza, digite o nome de um arquivo válido."
   exit 1
else
    zenity --warning --title "Arquivo inválido" --width 300 --text "$arquivo não é um arquivo."
fi

# exibir a mensagem