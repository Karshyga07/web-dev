if (n < 0) {
  alert(`Power ${n} is not supported`);
}

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
        
  return result;
}




