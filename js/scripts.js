function findFactorial(num) {
  var factorial = 1;
  for (num; num > 1; num--) {
    factorial *= num;
  }
  return factorial;
}

// function findFactorialRecursion(num, factorial) {
//   if (num > 0) {
//     console.log("num = " + num + ", factorial = " + factorial);
//     factorial *= num;
//     debugger;
//     var newnum = factorial;
//     findFactorialRecursion(num - 1, factorial);
//   } else {
//     console.log("hi");
//     var newnum = factorial;
//
//
//   }
//   return newnum;
// }


function findFactorialRecursion(num) {
  if (num === 0) {
    return 2;
  }
  else {
    return (num * findFactorialRecursion(num-1));
  }
}
