function factorial(n) {
    for (let i = n-1; i > 1; i--) {
        n *= i;
    }
    return n;
}

console.log(factorial(5));

// recursivo

function factorial2(n) {
  if (n <= 1) {
      return 1;
  } else {
      return n * factorial2(n - 1);
  }
}

// maior palavra, também não entendi

function longestWord(str){
  let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

//