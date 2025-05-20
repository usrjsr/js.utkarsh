// const balance= new Number(16.549)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toExponential(2))
// console.log(balance.toPrecision(3))

// const hundreds =100000
// console.log(hundreds.toLocaleString('en-IN'))// commas according to indian number system
// console.log(hundreds.toLocaleString())//comma's according to american number system


// *************Maths***********

// console.log(Math)
// console.log(Math.abs(-5));
// console.log(Math.asin(1))//in radian
// console.log(Math.round(5.7))
// console.log(Math.min(4,5,6,7,1))

//math.random discussion

// console.log(Math.random())// output=> gives output from 0 to 1
// console.log(Math.floor(Math.random()*10)+1) // gives value from 1 to 9


const min=10;
const max=20;

console.log((Math.floor(Math.random()*(max-min+1))+min))