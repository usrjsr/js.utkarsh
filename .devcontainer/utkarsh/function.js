// function sayMyName() {
//     console.log("U");
//     console.log("T");
//     console.log("K");
//     console.log("A");
//     console.log("R");
//     console.log("H");
// }

const { useContext } = require("react");

//sayMyName();

// function sum(num1,num2) {
//     console.log(num1+num2);
// }

// const result=sum(45,"a");
// console.log(`Result=${result}`)// Result= undefined as nothing is getting returned from the function


// function sum(num1,num2) {
//     return (num1+num2);
// }

// const result=sum(45,"a");
// console.log(`Result=${result}`)// output=> Result=45a as 45a is getting returned from the function

// function loginUserMsg(username) {// function loginUserMsg(username="Utkarsh") is also true
//     if(!username || username===undefined) {
//         console.log("Please Enter Username");
//         return ;
//     }
//     return `${username} ,Just Logged In`;
// }

// console.log(loginUserMsg("Utkarsh"));
// console.log(loginUserMsg());

// function calculateCartPrice(...num1){//... rest operator or spread operator based on the uses// rest operator is used to pass multiple argument to the function and a array of given parameters is created
//     return num1;
// }

// console.log(calculateCartPrice(400,200,600));

//whaat if 

// function calculateCartPrice(val1,val2,val3,...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(400,500,700,900,1000,1100)); //output=>(3) [900, 1000, 1100] ///val1,val2,val3 gets the intital 3 values and rest element haivng rest operator forms an array 




//handling object in function
// const product ={
//     name:"Sunscreen",
//     price:"₹298/-"
// }

// function handleObject(newObj) {
//     console.log(`Product : ${newObj.name} and Price : ${newObj.price}`);
//     return ;
// }

// //console.log(handleObject(product));// we can directly pass the username { object details...}
// console.log(handleObject({
//     name:"Sunscreen",
//     price:"₹298/-"
// }))




// const arr=[200,100,400,300,900];

// function returnSecondValue(parameter) {
//    return parameter[1];
// }

// console.log(`Second element of array is ${returnSecondValue(arr)}`);// we can also pass the array directly instead of declaring just like in object we did

//*********SCOPE********** */

// let a=1;
// const b=5;
// var c=6;

// console.log("intially a",a);
// console.log("intially b",b);
// console.log("intially c",c);


// if(true) {
//     let a=2;
//     const b=4;
//     var c=8;

//     console.log("inside if condition a",a);
//     console.log("inside if condition b",b);
//     console.log("inside if condition c",c);
// }

//     console.log("outside if condition a",a);
//     console.log("outside if condition b",b);
//     console.log("outside if condition c",c);

    /***************output**************/ 

    /*
    intially a 1
    intially b 5
    intially c 6
    inside if condition a 2
    inside if condition b 4
    inside if condition c 8
    outside if condition a 1
    outside if condition b 5
    outside if condition c 8

    problem is with var only otherwise the variables declared inside the if condition is block scope...as we can see from the output
 */

//*****************************function declaration throught two methods

// function add(num) {
//     return num+1;
// }
// add(6);//we can call the function from anywhere ....even teh function is declared at bottom we can call it from the top

// const res=function(num) {
//     return num+2;
// }

// console.log(res(8));// we have to call the function after the declaration of function definition as the return value of the function is getting stored in a variable




/*******this keyword is used to refer the current context*******/

// const user={
//     username: "Utkarsh",
//     price: "₹999/-",
//     welcomeMsg: function() {
//         console.log(`${this.username},Welcome to Website`);
//     }
// }

// user.welcomeMsg();//Output=> Utkarsh,Welcome to Website
// user.username="Sumit";
// user.welcomeMsg();//Output=>Sumit,Welcome to Website, working in current context as we have changed the username 

/****what if  we try to console this */

//console.log(this);//empty parenthesis(empty object)

// function usr() {
//     let username="utkarsh";
//     console.log(this.username);//undefined as we have seen it working for the object previously
// }

// usr();



/*******ARROW FUNCTION**** */

// const usr= function() {
//     let username="Utkarsh Singh";
//     console.log(this.username);//output=> undefined again
//     console.log(this);//no empty parenthesis getting global details
// }
// usr();

//HOW ARRAY FUNCTION IS DECLARED ()=>{}

// const usr= () => {
//     let username="Utkarsh Singh";
//     console.log(this.username);//output=> undefined still
//     console.log(this);//empty parenthesis
// }
// usr();


//basic arrow function declaration//explicit return
// const sum= (num1,num2) => {
//     return num1+num2;
// }
// console.log(sum(4,5));

//********OR */
//const sum= (num1,num2) => num1+num2;//implicit return//we can use parenthesis(num1+num2) also//another method of declaration of arrow function
//console.log(sum(4,5));


/****to return object */ 

// const sum=(num1,num2)=>{username:"usrjsr"};//output=> undefiend as we have to wrap up in parenthesis
// console.log(sum(3,4));

// const sum=(num1,num2)=>({username:"usrjsr"});//output=> {username: 'usrjsr'} as we have to wrap up in parenthesis
// console.log(sum(3,4));





//*********************IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// function usr() {
//     console.log('Database Connected');
// }
// usr();

//named IIFE ()()   //()=>function definition ()=> execution call it is used to remove pollution of global scope
// (function usr1(){
//     console.log("DATABASE CONNECTED")
// })()
//unnnamed iife
// (() =>{console.log("DATABASE CONNECTED")})();
// (()=>{console.log("DATABASE CONNECTED")})();//we have to end iife with """colon""" otherwose we'll get gerror


//((username)=>{console.log(`${username},DATABSAE CONNECTED`)})('Utkarsh');//output=> Utkarsh,DATABSAE CONNECTED








//****************************JAVASCRIPT EXECUTION CONTEXT
// 1> GLOBAL execution context
// 2> function execution context
// 3> eval execution context//property of global execution context

let val1=10
let val2=14

function sum(num1,num2){
    let total=num1+num2
    return total
}

let sum1=sum(val1,val2)
let sum2=sum(18,56)

/*1> GLOBAL EXECUTION => allocates in "this"
   
   2> **********memory phase
   val1=>undefined
   val2=>undefiend
   sum=>definition
   sum1=>undefined
   sum2=>undefined

   3> **********execution phase
   val1=10
   val2=14

   sum=> already definition is defined during memory phase but a """"""new variable environment +execution thread"""""" is created and cretes this for every call
   {
     1>memory phase
          val1=> undefined
          val2=>undefiend
          total=>undefined

     2>execution context   
           num1=10
           num2=14
           total=25//returns into global executional context

      once the execution is complete then this execution thread is """"""deleted""""""
   
   }

   same repition for next call


*/