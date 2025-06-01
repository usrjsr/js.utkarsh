// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);//doesn't changes as the property of its value writable is false


const chai={
    name: 'lemon tea',
    price: 25,
    isAvl: true,
    orderChai: function() {
       console.log('Ordered');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai ,'name'));

Object.defineProperty(chai ,'name',{
    writable: false,
    enumerable: false//name will be not iterating in the laast output
})
console.log(Object.getOwnPropertyDescriptor(chai ,'name'));

chai.name="ginger tea";
console.log(chai.name);//as writable property is false so doesn't gert overwrited

for(let [Key,value] of Object.entries(chai)) {
    if(typeof value!= "function") {
        console.log(`${Key}: ${value}`);
    }
}
