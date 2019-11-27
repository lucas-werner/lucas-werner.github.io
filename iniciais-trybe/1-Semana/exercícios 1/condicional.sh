mkdir João

var1="Lucas"
var2="João"
var3="Carlitos"

if ls $var1
then
    echo "Diretório $var1 encontrado"
elif $var2
then  
    echo "Diretório $var2 encontrado"
else
    echo "Não há diretório"
fi
