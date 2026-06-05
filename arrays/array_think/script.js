//           level 4

//1. print largest number
let arr = [10, 50, 20, 80, 30];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`largets is ${largest}`);

//2 smallest number
let arr1 = [10, 50, 20, 80, 30];
let smallest = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < smallest) {
    smallest = arr1[i];
  }
}
console.log(`smallest is ${smallest}`);

//3 second largest   ***************************************************
let arr2 = [10, 50, 20, 80, 30];
let first_largest = arr2[0];
let second_largest;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > first_largest) {
    // first_largest = arr2[i];
    second_largest = first_largest;
    first_largest = arr2[i];
  }
}
console.log(`${first_largest} ${second_largest}`);

//4 count even number
let arr3 = [10, 15, 20, 25, 30];
let count = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0) {
    count++;
  }
}
console.log(`even numbers are ${count}`);

//5 count odd number
let arr4 = [10, 15, 20, 25, 30];
let count_odd = 0;
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 != 0) {
    count_odd++;
  }
}
console.log(`odd numbers are ${count_odd}`);

//6 total sum
let arr5 = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < arr5.length; i++) {
  sum = sum + arr5[i];
}
console.log(`sum is ${sum}`);

//7 find average
arr6 = [10, 20, 30, 40];
let sum1 = 0;
let average;
for (let i = 0; i < arr6.length; i++) {
  sum1 = sum1 + arr6[i];
  average = sum1 / arr6.length;
}
console.log(`average is ${average}`);

//8 positive number
let arr7 = [-5, 10, -3, 8, 2];
let count1 = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0) {
    count1++;
  }
}
console.log(`positive numbers are ${count1}`);

//9 negative number
let arr8 = [-5, 10, -3, 8, 2];
let count2 = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] < 0) {
    count2++;
  }
}
console.log(`negative numbers are ${count2}`);

//10 number of zero
let arr9 = [0, 10, 0, 5, 0];
let count3 = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] == 0) {
    count3++;
  }
}
console.log(`zero numbers are ${count3}`);

// 11. reverse Array
let arr10 = [10, 20, 30, 40];
for (let i = arr10.length - 1; i >= 0; i--) {
  console.log(arr10[i]);
}

//12. biggest string length   ******************************************
let arr11 = ['apple', 'banana', 'kiwi'];
let largest_length = arr11[0].length;
for (let i = 0; i < arr11.length; i++) {
  // console.log(arr11[i].length);
  if (arr11[i].length > largest_length) {
    largest_length = arr11[i].length;
  }
}
console.log(`largest length is ${largest_length}`);

//13 find largets word      ******************************************
let arr12 = ['apple', 'banana', 'kiwi'];
let largets_word = arr12[0].length;
for (let i = 0; i < arr12.length; i++) {
  if (arr12[i].length > largets_word) {
    largets_word = arr12[i];
  }
}
console.log(`largest word is ${largets_word}`);
// mistakes = arr12[0].length -> arr12[0]
// largets_word -> largets_word.length

//14 count vowel in array              ************pending
let arr13 = ['apple', 'orange', 'kiwi'];
let num = 0;
for (let i = 0; i < arr13.length; i++) {
  for (let j = 0; j < arr13[i].length; j++) {
    if (
      arr13[i][j] == 'a' ||
      arr13[i][j] == 'e' ||
      arr13[i][j] == 'i' ||
      arr13[i][j] == 'o' ||
      arr13[i][j] == 'u'
    ) {
      num++;
    }
    // num++;
  }
}
console.log(num);

// let ch = 'apple';
// console.log(ch[4]); //each charcter deep
// let countt = 0;
// if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//   console.log(countt++);
// }

// console.log(countt);

// let word = 'apple';
// let total1 = 0;
// for (let i = 0; i < word.length; i++) {
//   // console.log(word[i]);
//   if (
//     word[i] == 'a' ||
//     word[i] == 'e' ||
//     word[i] == 'i' ||
//     word[i] == 'o' ||
//     word[i] == 'u'
//   ) {
//     total1++;
//   }
// }
// console.log(total1);

//15. print even numbers
let arr14 = [10, 15, 20, 25, 30];
for (let i = 0; i < arr14.length; i++) {
  if (arr14[i] % 2 == 0) {
    console.log(`even are ${arr14[i]}`);
  }
}

//16 Print Only Odd Numbers
let arr15 = [10, 15, 20, 25, 30];
for (let i = 0; i < arr15.length; i++) {
  if (arr15[i] % 2 != 0) {
    console.log(`odd number ${arr15[i]}`);
  }
}

//17 create new array with double value
let arr16 = [1, 2, 3, 4];
let new_arr = [];
for (let i = 0; i < arr16.length; i++) {
  new_arr.push(arr16[i] * 2);
}
console.log(new_arr);

//18 find missing number
let arr17 = [1, 2, 3, 5];
for (i = 0; i < arr17.length; i++) {
  if (i + 1 == arr17[i]) {
    console.log(i);
  }
}
