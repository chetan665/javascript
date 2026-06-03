// 1. showName("Sachin")
// ouput -My name is Sachin

function showName(name) {
  console.log(`my name is ${name}`);
}

showName('sachin');

// 2. showCity("Delhi")

// Output:

// I live in Delhi

function showCity(city) {
  console.log(`i live in ${city}`);
}

showCity('delhi');

//3. showNumber(25)

// Output:

// Number is 25

function showNumber(number) {
  console.log(`my number is ${number}`);
}
showNumber(25);

// Function + Conditions  **************

// 4. checkEven(4)
// Output:
// Even
// checkEven(7)
// Output:
// Odd

function checkEven(number) {
  if (number % 2 == 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

checkEven(33);

//5. checkAge(20)

// Output:
// Adult
// checkAge(15)
// Output:
// Minor

function checkAge(age) {
  if (age >= 18) {
    console.log('adult');
  } else {
    console.log('minor');
  }
}

checkAge(15);

//5. pass or fail

function checkMarks(marks) {
  if (marks >= 33) {
    console.log('pass');
  } else console.log('fail');
}

checkMarks(22);

// Function + Loops  ************

//6. printNumbers(5)

// Output:
// 1
// 2
// 3
// 4
// 5

function printNumbers(numbers) {
  for (i = 1; i <= numbers; i++) {
    console.log(i);
  }
}

printNumbers(5);

// 7. stars(4)

// Output:
// *
// **
// ***
// ****

function stars(number) {
  for (let i = 1; i <= 4; i++) {
    line = '';
    for (j = 1; j <= i; j++) {
      line = line + '*';
    }
    console.log(line);
  }
}
stars(4);

//8. evenNumbers(10)

// Output:

// 2
// 4
// 6
// 8
// 10

function evenNumbers(numbers) {
  for (i = 1; i <= numbers; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

evenNumbers(10);

console.log('');
console.log('');

//  ****************Level 1 — Basic Function Thinking (Day 1)*************

// 1.
function sayHello() {
  return 'hello';
}

console.log(sayHello());

//2.
function showName(name) {
  return name;
}

console.log(showName('sachin'));

//3.
function showAge(age) {
  return age;
}

console.log(showAge(27));

//4.
function square(num) {
  return num * num;
}

console.log(square(7));

//5.
function cube(num) {
  return num * num * num;
}
console.log(cube(3));

//6.
function double(num) {
  return num + num;
}
console.log(double(5));

//7.
function half(num) {
  return num % 2;
}
console.log(half(10));

//8.
function findLength(str) {
  // let str = "hello my name is sachin"
  return str.length;
}

console.log(findLength('hello'));

//9.
function isEven(num) {
  if (num % 2 == 0) return 'even';
  else return 'odd';
}
console.log(isEven(69));

//10
function odd(num) {
  if (num % 2 != 0) return 'odd';
  else return 'even';
}
console.log(isEven(89));

//11 Return larger number
function findBig(a, b) {
  if (a > b) return a;
  else return b;
}
console.log(findBig(90, 153));

//12 Return larger number
function findSmall(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(findSmall(90, 153));

//13.
function checkAge(age) {
  if (age >= 18) return 'adult';
  else return 'minor';
}
console.log(checkAge(18));

//14.
function checkPositive(num) {
  if (num >= 0) return 'positive';
  else return 'negative';
}
console.log(checkPositive(-9));

//15.
function checkNumber(num) {
  if (num > 0) return 'positive';
  else if (num < 0) return 'negative';
  else return 'zero';
}
console.log(checkNumber(1.88));

//16
function findGrade(marks) {
  if (marks > 90) return 'A';
  else if (marks > 70 && marks <= 90) return 'B';
  else if (marks > 50 && marks <= 70) return 'B';
  else return 'fail';
}
console.log(findGrade(9));

//17. leap year **********************88
function checkLeapYear(year) {
  if (year % 100 == 0) //year==00
  {
    if (year % 400 == 0) return 'leap year';
    else return 'not leap year';
  } else {
    if (year % 100 != 0) {
      if (year % 4 == 0) return 'leap year';
    } else return 'not a lepa year';
  }
}
console.log(checkLeapYear(1900));

//18
function checkDivisible(num) {
  if (num % 5 == 0 && num % 3 == 0) return 'number is divisible';
  else return 'not divisible';
}

console.log(checkDivisible(30));

//19  level 3
function sum(a, b, c) {
  let result = a + b + c;
  return result;
}

console.log(sum(2, 2, 2));

//20.
function average(a, b, c) {
  let result;
  result = (a + b + c) / 2;
  return result;
}
console.log(average(5, 5, 5));

//21
function calculator(a, b, operator) {
  if (operator == '+') return a + b;
  else if (operator == '-') return a - b;
  else if (operator == '*') return a * b;
  else if (operator == '%') return a % b;
}

console.log(calculator(2, 3, '%'));

//22.
function power(num, pow) {
  // let result = num ^ pow;
  let result = 1; // start with 1
  for (let i = 1; i <= pow; i++) {
    // console.log(pow);
    result = result * num; // multiply again and again
    console.log(`Step ${i}: ${result}`);
  }
  console.log(pow);
  console.log('res is ' + result);
}
power(5, 6);
