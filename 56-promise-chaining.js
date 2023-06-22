// let p1 = new Promise((resolve, reject) => {
//   console.log("Resolved after 2 seconds")     
//   setTimeout(() => {
//                 resolve(56)
//         }, 2000)
// })
// console.log(p1)

// p1.then((value) => {
//         console.log(value)
//         return let p2= new Promise((resolve, reject) => {
//                 setTimeout(() => { resolve("Promise 2") }, 2000)
        //OR
        return new Promise((resolve, reject) => {
            //    setTimeout(() => { resolve("Promise 2") }, 2000)
            //         }) 
            // }).then((value) => {
            //         console.log("We are done")
            //         return 2
            // }).then((value)=>{
            //         console.log("Now we are pakka done")
            // })