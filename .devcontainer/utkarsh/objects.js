//Object can be defined using literals and constructors
//singleton is not formed when we defines usiing literal but from constructor it does

//Object.create()     =>constructor
//object literals

const sym= Symbol()

const JsUser={
    name: "Utkarsh", //name-> key  utkarsh-> value
    [sym]: "SYMBOL" ,//[]=>syntax for symbol in object and declaration const sym= Symbol()
    age: 18,
    location: "Ranchi",
    email: "utkarsh@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"],
    "full name" : "Utkarsh Singh"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[sym])
// Object.freeze(JsUser)//now further changes will be not applicable
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello JS User")
    
// }
// console.log(JsUser.greeting())//undefined in output because function returns a value


// JsUser.greeting1=function(){
//     console.log(`Hello JS user, ${this["full name"]}`)
// }

// console.log(JsUser.greeting1())//undefined in output because function returns a value