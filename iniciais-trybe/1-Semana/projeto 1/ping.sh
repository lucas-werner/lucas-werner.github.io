#!/bin/bash
echo  -e "Digite a opção do jogo você quer saber o ping:\n1)DOTA\n2)LOL"
read JOGO

if [[ -z "$JOGO" ]]; then
     zenity --warning --title "Arquivo inválido" --width 300 --text "Opa, você precisa passar um valor válido como argumento!"
     exit 1
fi
   
if [ $JOGO = 1 ];
then
    echo "buscando ping..."
    teste=$(ping -c 6 209.197.25.1 | tail -1| awk '{print $4}' | cut -d '/' -f 2)
    echo "Seu ping atual é de $teste ms"
    if [ $teste < 100000 ]; then
        echo "A conexão não está tão boa pra jogo. Melhor nem logar!"
    else
        echo "Tudo pronto! Só vai!"
    fi
fi
if [ $JOGO = 2 ];
then
    echo "buscando ping..."
    teste=$(ping -c 2 104.160.152.3 | tail -1| awk '{print $4}' | cut -d '/' -f 2)
    echo "Seu ping atual é de $teste ms"
    if [[ $teste < $limite ]]; then
        echo "A conexão não está tão boa pra jogo. Melhor nem logar!"
    else
        echo "Tudo pronto! Só vai!"
    fi
fi
​