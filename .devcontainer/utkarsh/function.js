function sayMyName() {
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("H");
}

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