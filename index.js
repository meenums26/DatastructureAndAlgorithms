/* sum of n natural numbers */

function sect1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log("sum :", sect1(5));

/* another method */

function sect2(n) {
  let sum = 0;
  sum = (n * (n + 1)) / 2;

  return sum;
}

console.log("sum2 :", sect2(5));

/* sum of digits of a number */

function sec3(n) {
  let sum = 0;

  while (n > 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log("sumOfDigits :", sec3(123));

/* count the number of digits of a number */

function numberOfDigits(n) {
  n = Math.abs(n);
  let numberOfDigits = 0;
  do {
    numberOfDigits++;
    n = Math.floor(n / 10);
  } while (n > 0);
  return numberOfDigits;
}

console.log("number of digits :", numberOfDigits(12345));

/*check the number is palindrome or not*/

function isPalindrome(num) {
  let number = num;
  let reverseNumber = 0;
  while (number > 0) {
    let reminder = number % 10;
    reverseNumber = 10 * reverseNumber + reminder;

    number = Math.floor(number / 10);
  }

  return reverseNumber === num ? true : false;
}

console.log("isPalindrome :", isPalindrome(121));

/* fibonacci number */

function findFibonnaci(n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}

console.log("fibonacci :", findFibonnaci(4));

/* missing number */

function missingNumber(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum = sum + arr[i];
  //   }
  //   return (arr.length * (arr.length + 1)) / 2 - sum;

  return (
    (arr.length * (arr.length + 1)) / 2 - arr.reduce((acc, num) => acc + num)
  );
}

console.log("missing :", missingNumber([0, 1, 2, 3, 4, 5, 7]));
