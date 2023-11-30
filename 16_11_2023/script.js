// es6 features
// object destructuring
const obj = {
  name: 'nitin',
  age: 30,
  marks: 10,
  address: {
    city: 'delhi',
    state: 'delhi',
  },
  pincode: 10000,
  username: 'npahal',
  password: '123456',
};

// const name = obj.name;
// const age = obj.age;

let {
  password,
  address: {
    city, state
  },
} = obj;

return user;

function printUsername({ username, address: { city, state } }) {
  console.log(object.username);
}

printUsername(obj);

// array destructuring
const arr = [
  {
    name: 'nitin',
    age: 30    
  },
  {
    name: 'rahul',
    age: 31   
  },
  {
    name: 'mohit',
    age: 32    
  }
];

const third = arr[2];

const [f, ...rest] = arr;

// alias
const { name: usernameOfSecondElement } = arr[1];

// multi line strings or template literals
console.log(`
My name is ${usernameOfSecondElement}

And my age is ${arr[1].age}
`); // My name is rahul

// default parameters
function add(a, b = 0) {
  return a + b;
}

add(10)

const myname = 'nitin';
const myage = 30;

// object literals
const obj1 = {
  myname,
  myage,
}

// loops for objects
const obj1Keys = Object.keys(obj1) // this return array of keys of object - ['myname', 'myage']

obj1Keys.forEach((key) => {
  console.log(`Key is ${key} and value is ${obj1[key]}`);
});

// for in loop
/**
 * syntax
 * 
 * for (let key in object) {
 *  statements
 * }
 */

for (let key in obj1) {
  console.log(`Key is ${key} and value is ${obj1[key]}`);
}

Object.values(obj1) // return array of values of object - ['nitin', 30]

// for of
/**
 * syntax
 * for (let value of object) {
 *  statements
 * }
 */

// this keyword
function abc() {

}

// setTimeout
// syntax
/**
 * setTimeout(callbackFunction, time) - time is in miliseconds
 * 
 * returns id of timeout which can be used to clear timeout
 * 
 * clearTimeout(id)
 */

setTimeout(function() {
  console.log('Hello');
}, 5000);

// setInterval
setInterval(function() {
  console.log('Hello');
}, 2000);

// execution context

// promises
// async await
