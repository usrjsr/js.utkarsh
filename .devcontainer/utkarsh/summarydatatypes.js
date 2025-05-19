// javascript is dynamically typed

//primitive data types
//   7 categories
//   1.string 2.number 3.boolean 4.null 5.undefined 6.symbol 7.bigint

//how symbol is defined?? 
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)=> false console.log(id==anotherId)=> false

// non primtive/reference
// 1. array 2. objects 3. function
//array
//const heroes=["shaktimaan", "hanuman", "Naagraj"]
//object
// let myObj= {
//     name: "Utkarsh"
// }
//function
// const myFunction=function(){
//     console.log("Hello World")
// }

// console.log(heroes)

//memory=> stack and heap
//stack=> we get copy of the value
//heap=> we get reference of original value

// let myName="UTKARSH SINGH"

// let anotherName=myName  // here we get copy of myName not the reference
// console.log(anotherName)
// anotherName="abc" // as it's primitive so in stack memory (changes in this will not affect the original myName one cause it's the copy)
// console.log(myName)
// console.log(anotherName)

// let user1= {
//     email: "svm@nuq.com",
//     name: "svm"
// }

// let user2=user1
// console.log(user2)//output=> same
// console.log(user1)// output=> same
// user2.email="svmnuq@gmail.com"
// console.log(user2)//output=>changed
// console.log(user1) // output=> also changes wrt to user2 details as object is a non primitive so allocates heap memory & we're changing user2 details which has reference of user1 so any changes done on user2 will automatically occur in user1 as here no copy is created
