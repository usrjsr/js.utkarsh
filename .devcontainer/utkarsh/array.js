/*******Array*******/

// const arr=[2, 4, 5, 6,7,true,"himanshu"];// can contains multiple data having different data types
// console.log(arr[6])

// const myArr=["shaktimaan","hanuman"]
// // const myarr= new Array(1,2,3,4,5)
// // console.log(myArr.length)
// // console.log(myarr.length)
// // console.log(myarr[0])
// myArr.push("rama")
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift("rama")//at 0th index it gets introduce
// console.log(myArr)
// myArr.shift()//removes 0th element
// console.log(myArr)
// console.log(myArr.indexOf("hanuman"))
// console.log(myArr.indexOf("rama"))


// const myArr=[1,2,3,4,5]
// const newArr=myArr.join()//converts array to string
// console.log(myArr)
// console.log(newArr)//output=> 1,2,3,4,5
// console.log(typeof newArr)// output=> string
// console.log("A", myArr)

// //slice & splice
// const newArr= myArr.slice(1,3)
// console.log("B",newArr)// slice contains the array elements [1,3) {rember inclusion and exclusion} no changes in original array
// const newArr2=myArr.splice(1,3)
// console.log("C",newArr2)//splice contains the array elements [1,3] and orginal array get spliced contains [0,4]-[1,3]
// console.log("original array ",myArr)

const indian_heros= ["hanuman","Jamvant","bali","Sugriv","rama","Lakshman"]
const marvel_heros= ["thanos","Ironman","Spiderman"]

// indian_heros.push(marvel_heros)//whole array got pushed back as a single element into the array , no new arrat is formed
// console.log(indian_heros)
// console.log(indian_heros[6])//output=> ['thanos', 'Ironman', 'Spiderman']
// console.log(indian_heros[6][0]) //output=> thanos

// const new_Hero=indian_heros.concat(marvel_heros)//a new array as formed after concatenation and with different elements
// console.log(indian_heros)// ['hanuman', 'Jamvant', 'bali', 'Sugriv', 'rama', 'Lakshman']
// console.log(marvel_heros)//['thanos', 'Ironman', 'Spiderman']
// console.log(new_Hero)//['hanuman', 'Jamvant', 'bali', 'Sugriv', 'rama', 'Lakshman', 'thanos', 'Ironman', 'Spiderman']

// const new_hero=[...indian_heros,...marvel_heros]
// console.log(new_hero)//['hanuman', 'Jamvant', 'bali', 'Sugriv', 'rama', 'Lakshman', 'thanos', 'Ironman', 'Spiderman']

// const newArr=[1,2,3,[4,5,6],7,8,[9,10],11,[12,13,14]]
// console.log(newArr.flat(Infinity))//spreads the elemt of the array and return a new array


//console.log(Array.from("Utkarsh"))//return "U", "T",...... if it cannot converts then it returns empty array
// let marks1= 98
// let marks2= 99
// let marks3= 91
// let arr=Array.of(marks1,marks2,marks3)
//  console.log(arr)//(3) [98, 99, 91]
