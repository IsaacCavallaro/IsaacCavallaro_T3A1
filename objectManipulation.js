// let user = {
//     name: "Isaac",
//     age: 31,
//     member: true
//   };
  
//   for (let key in user) {
//     console.log(key)
//     console.log(user[key])
//   }

//   for (let key in user) {
//     console.log(`${key}: ${user[key]}`)
//   }


////////////////////////////////////////////////////////////////////////////////

// let ages = {
//     Ben: 20,
//     Sam: 16,
//     Matt: 13
//   };
  
//   let sum = 0;
//   for (let key in ages) {
//     sum += ages[key];
//   }

// console.log(sum)

////////////////////////////////////////////////////////////////////////////////

// let ages = {
//     Ben: 20,
//     Sam: 16,
//     Matt: 13
//   };
  
//   let sum = 0;
//   for (let name in ages) {
//     sum += ages[name];
//   }

// console.log(sum)


////////////////////////////////////////////////////////////////////////////////

// let ages = {
//     Ben: 20,
//     Sam: 16,
//     Matt: 13
//   };

// console.log(ages.Ben)

// delete ages.Ben;

// console.log(ages)

// ages.Ben = 24

// console.log(ages)

////////////////////////////////////////////////////////////////////////////////

let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };

let combineObject = Object.assign(object1, object2);

console.log(combineObject)