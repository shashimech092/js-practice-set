

let marks = {
    Harry: 90,
    Shashi: 75,
    Shri: 80,
    Gopi: 78
  }
  // for (i = 0; i < Object.keys(marks).length; i++) {
  //   //console.log('The marks of '+Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
  // }
  
  for (key in marks) {
    console.log('The marks of ' + key + " are " + marks[key])
  }
  
  cn=8
  let i
  while (i!=cn){
    console.log("Try agian")
    i=prompt("enter a number")
  }
  console.log("you have entered a correct number")
  
  
  const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
  }
  console.log(mean(2,3,5,4))