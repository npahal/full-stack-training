// setTimeout
// syntax
/**
 * setTimeout(callbackFunction, time) - time is in miliseconds
 *
 * returns id of timeout which can be used to clear timeout
 *
 * clearTimeout(id)
 */

let myVar;

// Promise
/**
 * new Promise(function(resolve, reject) {
 *  // do something
 *
 *  // if successful then resolve
 *  // if error or unsuccessful then reject
 * });
 *
 * then - called when promise is resolved
 *
 * catch - called when promise is rejected
 */

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    myVar = {
      user1: {
        name: 'nitin',
      },
    };

    resolve();
  }, 5000);
});

// myPromise
//   .then(function (response) {
//     console.log('Promise resolved');
//     console.log(myVar.user1.name);
//   })
//   .catch(function (error) {
//     console.log('Something went wrong: ', error);
//   });

// console.log('Proceeding further');

// myVar = { user1: { name: 'nitin' } };
// we have to wait for the data to be available to get the value of myVar

// execution context

// promises
// async await

async function abc() {
  try {
    // do something

    const response = await myPromise;

    console.log('Promise resolved');
    console.log(myVar.user1.name);

    console.log('Proceeding further');
  } catch (error) {
    console.log('Something went wrong: ', error);
  }
}

// fetch
// GET

fetch('https://countriesnow.space/api/v0.1/countries/currency')
  .then((response) => console.log(response))
  .catch((error) => console.log('Request to get countries failed: ', error));

// GET, POST, PUT, DELETE, PATCH, OPTIONS

// classes
class Car {
  // properties
  // methods

  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  // methods

  getName() {
    return this.name;
  }

  changeName(newName) {
    this.name = newName;
  }
}

const car1 = new Car('Q3', 'Audi'); // instance of class Car

car1.name;
car1.brand;

car1.getName();
car1.changeName('Q5');

// event listeners
