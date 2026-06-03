// ****************logic****************************
// Print something?
// → console.log()

// Need total?
// → sum = sum + value

// Need count?
// → count++

// Need multiply repeatedly?
// → result = result * value

// 1. Print 1 → 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('');
//2. Print 10 → 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log('');

//3. Print even numbers 2 → 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}
console.log('');

//4. Print odd numbers 1 → 15

for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) console.log(i);
}
console.log('');

//5 .Print numbers 1 → 50 divisible by 5

for (let i = 1; i <= 50; i++) {
  if (i % 5 == 0) console.log(i);
}
console.log('');

//6.  Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
console.log('');

//7. Print multiplication table of any number
// let number = Number(prompt('enter a number'));
// for (let i = 1; i <= 10; i++) {
//   // console.log(number + ' * ' + i + ' = ' + number * i);
//   console.log(`${number} * ${i} = ${number * i}`);
// }
console.log('');

// 8. Print
for (let i = 5; i <= 25; i += 5) {
  console.log(i);
}
console.log('');

// Level 2 — Build Logic

// 9. Find sum of 1 → 10    *********** logic imp.

let sum = 0; //initial sum value
console.log(`initial sum ${sum}`);
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(`final sum ${sum}`); // after loop sum val.
console.log('');

// 10. Find sum of 1 → 100
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

//11. Count numbers from 1 → 20     ********* logic
let count = 0;
for (let i = 1; i <= 20; i++) {
  count++;
}
console.log(`total numbers are ${count}`);

//12. Count even numbers from 1 → 20

let count1 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    count1++;
  }
}
console.log(`even numbers are ${count1}`);

//13. Count odd numbers from 1 → 20

let oddCount = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    oddCount++;
  }
}

console.log(`odd count is ${oddCount}`);

//14. Print squares
for (let i = 1; i <= 5; i++) {
  // square = i * i;
  // console.log(square);
  console.log(i * i);
}

//15. Print cubes

for (let i = 1; i <= 5; i++) {
  console.log(i * i * i);
}

// 16. factorial

let factorial = 1;
for (let i = 5; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(`factorial is ${factorial}`);

//17. Print numbers divisible by 3

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
console.log('');

//18. Print numbers divisible by 2 and 5
for (i = 1; i <= 50; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
console.log('');

//19. Print numbers between 1 → 50 except 20
for (i = 1; i <= 50; i++) {
  if (i == 20) {
    continue;
  }
  console.log(i);
}
console.log('');

//20. Print numbers between 1 → 20 except even numbers
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
console.log('');

//21.  Check whether a number is prime*************

let n = 31;
let count2 = 0;
for (i = 2; i <= n; i++) {
  if (n % i == 0) {
    count2++; // show how many number divisible by i
  }
}
if (count2 == 1) {
  console.log('prime number');
} else {
  console.log('not a prime number');
}
console.log('');

//22. Count total digits in a number   (pending)***

// hint -> Every time remove last digit******

//23. Reverse a number   (pending)***********

// Level 4 — Patterns (Brain Stretch)

//24.
// *
// **
// ***
// ****

for (let i = 1; i <= 4; i++) {
  let name = '';

  for (let j = 1; j <= i; j++) {
    // console.log('j');
    name = name + '*';
  }
  console.log(name);
}

//25. ****
//    ***
//    **
//    *

let roww = '';
for (i = 1; i <= 4; i++) {
  // console.log(i);
  roww = roww + i;
}
console.log(roww);

//    PENDING THINGS
// Level 5 — Real JS Thinking
// Find largest number in an array
// Find smallest number in an array
// Count vowels in a string
// Reverse a string
// Find sum of array elements
// Count total words in a sentence
// Find duplicate values in array
