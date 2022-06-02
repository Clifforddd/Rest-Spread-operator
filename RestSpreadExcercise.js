//Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...rest) => {
  return rest.filter(num => (num % 2 === 0))
};


//findMin
const findMin = (...rest) => {
  return rest.reduce((min, nextNum) => {
  return (min < nextNum) ? min : (min = nextNum)
  })
};


//mergeObjects
function mergeObjects(x, y) {
  return ({...x, ...y});
}

//doubleAndReturnArgs
const doubleAndReturnArgs = (spread, ...rest) => {
  return [...spread, ...rest.map((num) => {
    return (num * 2);
  })]
};

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
      const random = Math.floor(Math.random() * items.length);
      return [...items.slice(0, random), ...items.slice(random + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
   let newObj = {...obj}
  newObj[key] = val;
  return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let nObj = {...obj};
  delete nObj[key];
  return nObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
 return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let nObj = {...obj};
  nObj[key] = val;
  return nObj;
}
