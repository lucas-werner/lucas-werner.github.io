echo "Digite a sua mensagem: "
read MESSAGE

if [[ -z $MESSAGE ]];
then
    echo "Cara, você precisa digitar alguma coisa :("
    exit 1
else
    curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"$MESSAGE\"}" https://hooks.slack.com/services/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
    zenity --info --width 300 --text "Mensagem enviada :) Click OK para continuar."
 fi

