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