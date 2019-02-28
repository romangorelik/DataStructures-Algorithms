// Write a function which accepts an object and returns an array
// of all the values in the object that have a typeof string.

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

let collectStrings = (obj) => {
  let result = []

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result = result.concat(collectStrings(obj[key]))
    } else if (typeof obj[key] === 'string') {
      result.push(obj[key])
    }
  }

  return result
}