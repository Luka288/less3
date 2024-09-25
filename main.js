//1
let array0 = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function sumOfArr(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log(sumOfArr(array0));

//2

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function checkUser(userObject) {
  let result =
    userObject.isloggedin === true
      ? `${userObject.firstname} ${userObject.lastname}`
      : false;

  return result;
}

console.log(checkUser(user));

//3

let arr = [1, 2, 11, 9, 5, 6, 7, 8];

function findMax(array) {
  let maxNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

console.log(findMax(arr));

//4

function evenOrOdd(num) {
  let result = num % 2 === 0 ? "number is even" : "number is odd";
  return result;
}

console.log(evenOrOdd(4));

//5

let array1 = [1, 2, 3];

function reverseArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
reverseArray(array1);

//6

let checkAge = (dateOfBirth, CurrYear) => CurrYear - dateOfBirth;

console.log(checkAge(2004, 2024));

//7

let array8 = [1, 2, 3, 4, 100, 5];

function checkNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) {
      return "არის";
    }
  }
  return "არ არის";
}

console.log(checkNum(array5));

//8
let array5 = [1, 2, 3, 7, 6, 9];

function displayNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      continue;
    }
    console.log(array[i]);
  }
}

displayNum(array5);
