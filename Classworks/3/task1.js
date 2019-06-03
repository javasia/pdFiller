function fibo (n) {
  let res = 0
  let x = 0;
  let y = 1;
  for (let i = 1; i < n; i++){
    res = x + y;
    x = y;
    y = res;
  }
  return res
}

console.log ( fibo(7))