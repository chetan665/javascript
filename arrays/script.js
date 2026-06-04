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

//15. sum of negative
let arr11 = [-5, -10, 15, 20, -25];
let sum_negative = 0;
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] < 0) {
    sum_negative = sum_negative + arr11[i];
  }
}
console.log(`total of negative is ${sum_negative}`);

// // console.log('hi');

//16 average of all number
let arr12 = [10, 20, 30, 40, 50];
let sum1 = 0;
for (i = 0; i < arr12.length; i++) {
  sum1 = sum1 + arr12[i];
}
let average = sum1 / arr12.length;
console.log(`average is ${average}`);

//17 average of even number
let arr13 = [2, 4, 6, 7, 8];
let sum2 = 0;
let counteven = 0;
for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] % 2 == 0) {
    sum2 = sum2 + arr13[i];
    counteven++;
  }
}
// let average1 = sum2 / arr13.length;     *********wrong-> because it tell all arry length, so use couneven++
let average1 = sum2 / counteven;

console.log(`average of even number is ${average1}`);

//18. average of even number
let arr14 = [1, 3, 5, 8, 9];
let sum3 = 0;
let countodd = 0;
for (i = 0; i < arr14.length; i++) {
  if (arr14[i] % 2 != 0) {
    console.log(arr14[i]);
    sum3 = sum3 + arr14[i];
    countodd++;
  }
}

let average_odd = sum3 / countodd;
console.log(average_odd);

//19 largest number
let arr15 = [10, 55, 22, 89, 34];
let largest = arr15[0];
for (i = 0; i < arr15.length; i++) {
  if (arr15[i] > largest) {
    largest = arr15[i];
  }
}
console.log(`largest is ${largest}`);

// 20 smallest number
let arr16 = [25, 12, 7, 40, 18];
let smallest = arr16[0];
for (let i = 0; i < arr16.length; i++) {
  if (arr16[i] < smallest) {
    console.log(arr16[i]);
    smallest = arr16[i];
  }
}
console.log(`smallest is ${smallest}`);

//21 largest even number
let arr17 = [11, 24, 37, 48, 22];

let largest_even = arr17[0];

for (i = 0; i < arr17.length; i++) {
  if (arr17[i] % 2 == 0 && arr17[i] > largest_even) {
    // if (arr17[i] > largest_even) {
    //   arr17[i] = largest_even;
    // }
    largest_even = arr17[i];
  }
}
console.log(largest_even);

//22 smallest odd number
let arr18 = [17, 9, 21, 13, 5];
let smallest_odd = arr18[0];
for (let i = 0; i < arr18.length; i++) {
  if (arr18[i] % 2 != 0 && arr18[i] < smallest_odd) {
    smallest_odd = arr18[i];
  }
}
console.log(` smallest odd is ${smallest_odd}`);

//                          Index Based

//23  print element at even index
let arr19 = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < arr19.length; i++) {
  // console.log(`${i} - ${arr19[i]}`);
  if (i % 2 == 0) {
    console.log(arr19[i]);
  }
}

//24. element at odd index
console.log('elemnt at odd index');
let arr20 = [5, 10, 15, 20, 25, 30];
for (let i = 0; i < arr20.length; i++) {
  if (i % 2 != 0) {
    console.log(arr20[i]);
  }
}

//25 sum elemt at even index
let arr21 = [1, 2, 3, 4, 5, 6];
let sum_evenindex = 0;
for (let i = 0; i < arr21.length; i++) {
  if (i % 2 == 0) {
    sum_evenindex = sum_evenindex + arr21[i];
  }
}
console.log(`sum is ${sum_evenindex}`);

//26 sum at odd index
let arr22 = [10, 20, 30, 40, 50, 60];
let sum_oddindex = 0;
for (let i = 0; i < arr22.length; i++) {
  if (i % 2 != 0) {
    sum_oddindex = sum_oddindex + arr22[i];
  }
}
console.log(`sum of odd index ${sum_oddindex}`);

//     **********   reverse
//27 print reverse
let arr23 = [1, 2, 3, 4, 5];
for (let i = 4; i >= 0; i--) {
  console.log(arr23[i]);
}

//28 reverse count
let arr24 = [10, 20, 30, 40, 50];
for (i = arr24.length - 1; i >= 0; i--) {
  console.log(arr24[i]);
}

//29 reverse even number
console.log('reverse even numbers');
let arr25 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = arr25.length - 1; i > 0; i--) {
  if (arr25[i] % 2 == 0) {
    console.log(arr25[i]);
  }
}

//30 reverse odd numbers
console.log('reverse odd numbers');

let arr26 = [1, 2, 3, 4, 5, 6, 7];
for (let i = arr26.length - 1; i >= 0; i--) {
  if (arr26[i] % 2 != 0) {
    console.log(arr26[i]);
  }
}

//31 count number greater than 10
let arr27 = [5, 12, 18, 3, 20, 8];
let count = 0;
for (let i = 0; i < arr27.length; i++) {
  if (arr27[i] > 10) {
    count = count + 1;
  }
}
console.log('number grater than 10 ' + count);

//32 count number less than 50
let arr28 = [25, 60, 45, 80, 30];
let count1 = 0;
for (let i = 0; i < arr28.length; i++) {
  if (arr28[i] > 50) {
    count1++;
  }
}
console.log(count1);

console.log('next');
//33. number divisble by 3
let arr29 = [3, 5, 6, 8, 9, 12];
for (let i = 0; i < arr29.length; i++) {
  if (arr29[i] % 3 == 0) {
    console.log(arr29[i]);
  }
}

console.log('next');
//34 number divisible by 5
let arr30 = [10, 12, 15, 17, 20, 22];
for (let i = 0; i < arr30.length; i++) {
  if (arr30[i] % 5 == 0) {
    console.log(arr30[i]);
  }
}

//35 count multipe of 2
let arr31 = [2, 4, 5, 7, 8, 10];
let count2 = 0;
for (let i = 0; i < arr31.length; i++) {
  if (arr31[i] % 2 == 0) {
    count2++;
  }
}
console.log(`count multipe of 2 is ${count2}`);

//36 count multiple of 5
let arr32 = [5, 10, 12, 15, 20, 22];
let count3 = 0;
for (let i = 0; i < arr32.length; i++) {
  if (arr32[i] % 2 == 0) {
    count3++;
  }
}
console.log(`count multipe of 5 is ${count3}`);

//37 print first half
let arr33 = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < arr33.length / 2; i++) {
  console.log(arr33[i]);
}

//38 second half
console.log('second half');
let arr34 = [10, 20, 30, 40, 50, 60];
for (let i = arr34.length - 1; i > arr34.length / 2; i--) {
  console.log(arr34[i]);
}
