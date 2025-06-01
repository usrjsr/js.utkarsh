function createuser(username,score) {
    this.username=username;
    this.score=score;
}

createuser.prototype.increment=function(){
    this.score++;
    return this.score;
}

createuser.prototype.print=function(){
    console.log(`Price: ${this.score}`);
}

const tea= new createuser('tea',250);// new keyword creates a new object and injects prototype and whatever we're trying to inject and linked with property of  constructor function
const chai=new createuser('chai',25);
console.log(chai.increment())

