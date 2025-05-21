// let myDate= new Date()
// console.log(myDate)
// console.log(typeof(myDate))// type=> object
// console.log(typeof(myDate.toString()))
// console.log(myDate.toDateString())//outputs only date
// console.log(myDate.toLocaleTimeString())//time


let createdDate= new Date("2025-05-18")//month starts from  January
//console.log(createdDate.getDay())// sunday as 0
// console.log(createdDate)
// console.log(createdDate.toDateString())
// console.log(createdDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(createdDate.getTime())

let newDate= new Date()
console.log(newDate.getDay())//sunday starts from 0
console.log(newDate.getMonth()+1)//+1 because jan startrs from 0
console.log(newDate.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }))