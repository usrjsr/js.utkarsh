let myHeros=["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//heroPower.hitesh()=> hitesh prototype is added to object to it will be present for all objects
//myHeros.hitesh()=> same as above reason
myHeros.heyHitesh()//=> hey hitesh prototype is defined only for array so cannot be present for other objects
heroPower.heyHitesh()// caught error as it is defined over array not the object

// inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)






// String.prototype.truelength= function() {
//     console.log(`True length is: ${this.trim().length}`);
// }

// "utkarsh    ".truelength();