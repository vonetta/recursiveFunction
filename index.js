const countDown = num => {
  if (num === 1) {
    return 1;
  }

  return countDown(num - 1);
};

console.log(countDown(20));

const fib = num => {
  if (num === 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }

  return fib(num - 2) + fib(num - 1);
};

console.log(fib(8));
