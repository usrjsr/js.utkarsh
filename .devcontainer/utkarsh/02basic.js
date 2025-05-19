// let score= "33"
// console.log(typeof score) //type=>string

// let scoreNumber= Number(score)
// console.log(typeof scoreNumber)// type=> number

// let newScore="33abc"

// let newScoreNumber= Number(newScore)
// console.log(typeof newScoreNumber) //type=> number
// console.log(newScoreNumber)// vale stored => NaN(not a number)

// score=null;

// console.log(typeof score) //type=>string

//  scoreNumber= Number(score)
// console.log(typeof scoreNumber)// type=> number
// console.log(scoreNumber)// stores 0 as value

// score=true;

// console.log(typeof score) //type=>boolean

//  scoreNumber= Number(score)
// console.log(typeof scoreNumber)// type=> number
// console.log(scoreNumber)// stores 1 as value

//"33" => 33
//"33abc" => NaN
// true=> 1 false=>0

let isLogged= 1

let booleanisLogged=Boolean(isLogged)
console.log(booleanisLogged)

isLogged="abc"
booleanisLogged=Boolean(isLogged)
console.log(booleanisLogged)

isLogged=""
booleanisLogged=Boolean(isLogged)
console.log(booleanisLogged)// empty strings leads to false