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
