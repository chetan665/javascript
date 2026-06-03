// Arrays + Loops

//1. Print all elements.
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//2 .Print all fruits
let fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 3 print index and value
let arr1 = [5, 10, 15, 20];
for (i = 0; i < arr1.length; i++) {
  console.log(`${i + 1} is ${arr1[i]}`);
}

//4. print cities
let cities = ['Delhi', 'Mumbai', 'Chandigarh', 'Pune'];
for (i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

//5. print reverse
let arr2 = [1, 2, 3, 4, 5];
for (i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

//6 total number of elemnts
let arr3 = [10, 20, 30, 40, 50, 60];
for (i = 0; i < arr.length; i++) {
  // console.log(`total number of elements are ${arr3.length}`);
}
console.log(`total number of elements are ${arr3.length}`);

//7  count even number
let arr4 = [2, 7, 8, 11, 14, 19, 20];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 == 0) {
    console.log(`even number are ${arr4[i]}`);
  }
}

//8
let arr5 = [3, 6, 9, 12, 15, 18];
let newArr = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 != 0) {
    newArr.push(arr5[i]);
  }
}
console.log(`total elemnts are ${newArr.length}`);
console.log(newArr);

// 9 count positive number
let arr6 = [-10, 20, -30, 40, 50];
let arr_6 = [];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 0) {
    // console.log(arr6[i]);
    arr_6.push(arr6[i]);
  }
}
console.log(arr_6);

//10 negative number

let arr7 = [-5, -10, 15, 20, -25];
let arr_7 = [];
for (let i = 0; i < arr7.length; i++) {
  if (arr[7] <= 0) {
    arr_7.push(arr7);
  }
}
console.log(arr7);

//11. sum all elemnts
let arr8 = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr8.length; i++) {
  sum = sum + arr[i];
  // total.push(sum);
}
console.log(`total is ${sum}`);

//12. sum even numbers
let arr9 = [1, 2, 3, 4, 5, 6];
let sum_even = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] > 0) {
    sum_even = sum_even + arr9[i];
  }
}
console.log(`total of even is ${sum_even}`);

//13. sum of odd
let arr10 = [1, 2, 3, 4, 5, 6, 7];
let sum_odd = 0;
for (let i = 0; i < arr10.length; i++) {
  if (arr10 % 2 != 0) {
    sum_odd = sum_odd + arr10[i];
  }
}
console.log(`total of even is ${sum_odd}`);

//14. sum of negative
let arr11 = [-5, -10, 15, 20, -25];
let sum_negative = 0;
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] < 0) {
    sum_negative = sum_negative + arr11[i];
  }
}
console.log(`total of negative is ${sum_negative}`);

// // console.log('hi');
