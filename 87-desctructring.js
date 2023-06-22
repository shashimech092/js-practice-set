//let arr = [3, 5]
//let a=arr[0]
//let a=arr[1] or     
//let arr = [a, b] 
//console.log(a,b)

// let arr = [3, 5, 8]
// let [a,b,c,d] = arr
// console.log(a,b,c,d)// here d shows as undefined

// let arr = [3, 5, 8, 7, 9, 4]
// let [a,b,c,d] = arr
// console.log(a,b,c,d) // rest will be ignoring, this is called destcruring

let arr = [3, 5, 8, 7, 9, 4]
let [a,b,c,d, ...rest] = arr
console.log(a,b,c,d, rest)

let [a, , b, , ...rest] =arr
console.log(a, b, rest)
let {a,b} = {a:1, b:5}
console.log(a, b)

// Spread operator
let arr1 = [3, 5, 8]
let obj1={...arr1}
console.log(obj1)

function sum(v1, v2, v3){
  return v1+v2+v3
}
console.log(sum(...arr1))

let obj2 ={
  name: "Harry",
  company:  "Company xyz",
  address: "XYZ"
}
console.log({...obj2, name: 'John', company: 'ABC'})
console.log({name: 'John', company: 'ABC', ...obj2}) //this will print onj as it is.