function factorial(n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// recursivo

function factorial(n) {
  if (n <= 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}