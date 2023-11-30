const arr = ['A', 'B', 'C'];

// map - receives a callback function which can receive three parameters - currentItem, currentIndex, array
// it always returns a new array with the elements returned from the callback function
// it does not modify the original array

const marks = {
  nitin: 90,
  rahul: 80,
  mohan: 70,
};

const users = [
  {
    name: 'nitin',
    age: 30,
  },
  {
    name: 'rahul',
    age: 20,
  },
  {
    name: 'mohan',
    age: 10,
  },
];

const usersWithMarks = users.map(function (user) {
  return {
    name: user.name,
    age: user.age,
    marks: marks[user.name],
  };
});
/**
 * returns
    [
      {
        name: 'nitin',
        age: 30,
        marks: 90
      },
      {
        name: 'rahul',
        age: 20,
        marks: 80
      },
      {
        name: 'mohan',
        age: 10,
        marks: 70
      }
    ]
 */

arr.map(function (item) {
  return item + '1';
}); // return ['A1', 'B1', 'C1']

// truthy and falsy values - 6 falsy values - false, 0, '', null, undefined, NaN

// filter - filter out some elements from the array based on the condition
// returns new array of filtered elements
// does not modify the original array
usersWithMarks.filter(function (item) {
  if (item.marks > 75) {
    return true;
  }

  return false;
});

/**
 * returns
 * 
 * [
      {
        name: 'nitin',
        age: 30,
        marks: 90
      },
      {
        name: 'rahul',
        age: 20,
        marks: 80
      }
    ]
 */

// find - to search an element in array based on condition
// returns the first matched element
// does not modify the original array
usersWithMarks.find(function (item) {
  if (item.marks > 75) {
    return true;
  }

  return false;
});

// some - to check if at least one element matches the condition
// return true or false

// every - to check if all elements matches the condition
// return true or false

// reduce -
/**
 * syntax
 * arr.reduce(function(accumulator, currentItem, currentIndex, array) {
 *  // code block
 * }, initialValueOfAccumulator);
 *
 */

const arrayOfNumbers = [2, 55, 2, 6, 9, 54, 12];

/**
 * - create a variable for collecting the result/sum
 * - iterate over the array
 * - add every element to the result or sum variable
 * - at the end of iteration, you will have sum of all the variables in the result variable
 */

let result = 0;

arrayOfNumbers.forEach(function (item) {
  result = result + item;
});

// end result like this - { sum: 140 }
arrayOfNumbers.reduce(
  function (result, citem, cindex, array) {
    // intial value of accumulator - { sum: 0 }
    return {
      sum: result.sum + citem,
    }; // accumulation of data
  },
  { sum: 0 },
); // 140

// sum of numbers in sum variable

/**
 * [
    {
      name: 'nitin',
      age: 15,
      marks: 80
    },
    {
      name: 'rahul',
      age: 20,
      marks: 90
    },
    {
      name: 'mohan',
      age: 18,
      marks: 70
    },
    {
      name: 'rohan',
      age: 18,
      marks: 75
    },
    {
      name: 'mohit',
      age: 22,
      marks: 65
    }
  ]

    reduce this array to an object like this
    {
      nitin: {
        age: 30,
        marks: 90
      },
      rahul: {
        age: 20,
        marks: 80
      },
      mohan: {
        age: 10,
        marks: 70
      }
    }

    1. totalMarks
    2. totalAge
    3. {
        totalMarks: 240,
        totalAge: 60
      }

    - intial value of accumulator
    - what to do on every iteration

 */
usersWithMarks.reduce(function (acc, item) {
  // acc - {
  //    nitin: {
  //     age: 30,
  //    marks: 90
  //   }
  //  }
  /**
   * item - {
      name: 'mohan',
      age: 10,
      marks: 70
    }
   */

  acc[item.name] = {
    age: item.age,
    marks: item.marks,
  };

  /**
   * acc = {
   *   nitin: {
   *    age: 30,
   *   marks: 90
   *  },
   *  rahul: {
   *   age: 20,
   *   marks: 80
   *  }
   * }
   */

  return acc;
  /**
     * {
     *  item: {
          name: 'nitin',
          age: 30,
          marks: 90
        }
     * }
     */
}, {});

const arr1 = [10, 2, 32, 422, 60, 8, 24];

// indexOf & lastIndexOf
arr1.lastIndexOf(4); // 6

// includes
arr1.includes(3); // boolean

// sort
// syntax
// array.sort(function(currentItem, nextItem) { expects -1, 0, 1  as return values})
// modifies the original array

arr1.sort(function (a, b) {
  if (a < b) {
    return -1
  }
  
  if (a > b) {
    return 1
  }

  return 0
})

// concat
// concatinates old and new array and returns a new array

// join
// join receives a parameter, and used that parameter to join all the elements of array into a string
// returns a string

// rest operator
function useSpread(a, b, ...c) {
  console.log(a, b, c)
}

useSpread(10, 20, 30, 40, 50, 60);

// spread operator
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2)

// string methods
// split

// slice
// syntax, string.slice(startIndex, endIndex)

// substr
// syntax - string.substr(startIndex, length)

// substring
// syntax - string.substring(startIndex, endIndex)

// toUpperCase
// toLowerCase
// concat
// indexOf
// includes
// replace
