// class User {
//     constructor(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changedUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const user1=new User("usr","usr@gmail.com","123");

// console.log(user1.encryptPassword());
// console.log(user1.changedUsername());


//what if we dont have the class then how to do this

function user(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.changedUsername=function() {
    return `${this.username.toUpperCase()}`
}

user.prototype.encryptPassword=function() {
    return `${this.password}abc`;
}

const user1=new user("usr","usr@gmail.com","123");

console.log(user1.encryptPassword());
console.log(user1.changedUsername());

