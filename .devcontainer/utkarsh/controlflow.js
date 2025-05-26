//if statement 

// if(condition=>true){
//     if condition is true then it gets executed
// }

//everything is same as cpp if else switch nested if ternary

//truthe and false values

//false=>0,-0,BigInt 0n,null,undefined,NaN,""empty string
//truth- => "0",'false'it's inside string so true,[],{},function(){}

//if we have to check array is empty so array.length===0
//if we have to check object is empty or not so Object.keys(objectname).length===0


//Nullish Coalescing Operator(??):undefined
// let vall;
// vall=5??10//5
// vall=null??15//15
// //if res is there so val1=res otherwise null will be automatically assigned and program will run according to the null value
// vall=undefined??15//15
// vall=null??2??3??4//2
// //first value gets assigned after null or undefined
// console.log(vall)




/************ITERATION***************/

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
    
// }
//same as cpp for/while/dowhile

//for of loop
// const arr=[1,2,3,4,5]
// for (const element of arr) {
//     console.log(element)
// }

//maps holds key value pair

const map =new Map()
map.set('IN','INDIA')
map.set('PAK','PAKISTAN')
map.set('NEP','NEPAL')
map.set('IN','INDIA')
map.set('IN','INDIA')
// console.log(map)

// for(const key of map) {
//     console.log(key)
// }
//output 
//(2) ['IN', 'INDIA']
// (2) ['PAK', 'PAKISTAN']
// (2) ['NEP', 'NEPAL']

// for(const [key,value] of map) {
//     console.log(key)
// }
//output
// IN
// PAK
// NEP

const usr= {
    name: "Utkarsh",
    sem: "2nd"
}
//object is not iterable here from forof
// for (const element of usr) {
//     console.log(element)//error
// }

//using forin loop
// for (const key in usr) {
//    console.log(key,usr[key])
   /*
   name Utkarsh
    sem 2nd
 */
//}

//we can also use this for array and there will be no output if we use it to iterate map


const coding=["js","ruby","java","python","cpp"]

coding.forEach(function (item) {
    //console.log(item)// item will store the element of coding and we can use any ooperations
    
} )

coding.forEach((item)=>{
    //console.log(item)
})

//coding.forEach(function())//we can call the function inside parenthesis

coding.forEach((item,index,arr)=>{
   //console.log(item,index,arr)//print the item,index,whole array
})

const myCoding=[
    {
        name:"Cpp",
        srt:"c++"
    },

    {
        name:"Python",
        srt:"py"
    },

    {
        name:"java",
        srt:"jv"
    }
]

myCoding.forEach((item)=>{
    //console.log(item.name,item.srt)

})

// const value=myCoding.forEach((item)=>{
//    return item//but forEach doesn't return any kind of value
// })

//const nums=[1,2,3,4,5,6,7,8,9]

//const newnums=nums.filter((num)=>num>4)//it return automatically in explicit ,value which satisfies the condition
// const newnums=nums.filter((num)=>{//in implicit when we start the scope then we need to retutn the value
//     return num>4
// })
// console.log(newnums)



// const newnums=[]
// nums.forEach((num)=>{
//     if(num>4)
//         newnums.push(num)
// })
// console.log(newnums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userbooks=books.filter((item)=>item.genre==='History')
//   const userbooks=books.filter((item)=>{
//     if(item.genre==='History')
//         return (item.publish)//even after using item.publish it will return the whole object
//   })

//const userbooks=books.filter((item)=>item.publish>=1995 && item.genre==='History')


const nums=[1,2,3,4,5,6,7,8,9]

//const newnums=nums.map((item)=>item+10)//automatically return the value if we open the scope using curley braces then we need to return the values

//****************using for each
// const newnums=[]
// nums.forEach((item)=>{
//     newnums.push(item+10)
// })


//const newnums=nums.map((item)=>item*10).map((item)=>item+1).filter((item)=> item>50)//first .map passes the value to next .map
//console.log(newnums)



//*****************************REDUCE****************** */

const arr=[7,8,9,6]

// const res=arr.reduce((acc,curr)=>{
//     return acc+curr
// },0);

// const res=arr.reduce(function (acc,curr){
//     return acc+curr
// },0);
// console.log(res)

const shoppingCart=[
    {
        itemName: "C++",
        price: 999
    },
    {
        itemName: "Java",
        price: 1999
    },
    {
        itemName: "Python",
        price: 2999
    },
    {
        itemName: "Javascipt",
        price: 3999
    }
]

// const res=shoppingCart.reduce((total,item)=>{ return total+item.price},0)
// console.log(res)

console.log(shoppingCart.reduce(function(acc,item){return acc+item.price},0))


