//Object can be defined using literals and constructors
//singleton is not formed when we defines usiing literal but from constructor it does

//Object.create()     =>constructor
//object literals

// const sym= Symbol()

// const JsUser={
//     name: "Utkarsh", //name-> key  utkarsh-> value
//     [sym]: "SYMBOL" ,//[]=>syntax for symbol in object and declaration const sym= Symbol()
//     age: 18,
//     location: "Ranchi",
//     email: "utkarsh@gmail.com",
//     isLoggedIn: false,
//     LastLoginDays: ["Monday","Saturday"],
//     "full name" : "Utkarsh Singh"
// }
// console.log(JsUser["email"])
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

//const tinderuser= new Object()=> nonsingelton
// const tinderuser={} => singelton user

//non singelton constructive

const tinderuser ={}

tinderuser.id="12345"
tinderuser.name="Utkarsh Singh"
tinderuser.email="utkarsh@gmail.com"

//console.log(tinderuser)

const regularuser={
    email: "utkarsh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Utkarsh",
            lastname: "Singh"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)
// console.log(regularuser.fullname.userfullname.lastname)

// const obj1= {1: "a",2:"b"}
// const obj2= {3: "c",4:"d"}

// //const obj3={obj1,obj2} // as an object ot gets into obj3 {obj1: {…}, obj2: {…}}
// //const obj3=Object.assign({},obj1,obj2)//{1: 'a', 2: 'b', 3: 'c', 4: 'd'} as an element it gets introduced
// const obj3={...obj1,...obj2}//spreads the objects and combines
// console.log(obj3)

//value from the database

const users=[
    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    }
]
// console.log(users)
// console.log(users[0].email)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('name'))

// if(tinderuser.hasOwnProperty('isLoggedIn')) {
//     console.log(tinderuser.name)
// }
// else {
//     console.log("User Detail Not Found")
// }

const course= {
    coursename: "JEE Mathematics",
    price: "₹999/-",
    instructor : "Utkarsh Singh"
}

//instead of course.instructor

const {instructor}=course
console.log(instructor)
//OR

const {instructor:ins}=course //we can reduce the length using colon to give a new name to the instructor
console.log(ins)
