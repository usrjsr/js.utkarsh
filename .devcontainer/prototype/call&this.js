// function setUsername(username) {
//     this.username=username;
//     console.log("called");
// }

// function createUser(username,email,password){
//     setUsername(username);
//     this.email=email;
//     this.password=password;
// }

// const user1=new createUser("usr","usr@gmail.com","123");
// console.log(user1);

//output
// called
// createUser {email: 'usr@gmail.com', password: '123'}

/***************************
 * createusername function is getting called but username is not getting setupped as , 
 * as the function finishes it work it gets out of the call stack with variables and all so no username is there for the createuser function thats 
 * why no username is there in the object, so .call is ther to pass the reference so that username is also being included
 * 
 */


function setUsername(username) {
    this.username=username;
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const user1=new createUser("usr","usr@gmail.com","123");
console.log(user1);

// //output
// called
// createUser {username: 'usr', email: 'usr@gmail.com', password: '123'}