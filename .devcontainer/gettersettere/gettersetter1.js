// class user {
//     constructor (email,password) {
//         this.email=email;
//         this.password=password;
//     }

const { useReducer } = require("react");

//     get password() {
//       return this.password.toUpperCase();
//     }

//     set password(num) {
//         this.password=num.toUpperCase();
//     }
// }


// const usr=new user("usr@gmail.com","1234");
// console.log(usr.password);// getting error call stack size exceeded at set password as there was a race betweeen constructor and set who will set the password which results into size of call stack exceeded



// class user {
//     constructor (email,password) {
//         this.email=email;
//         this.password=password;
//     }

//     get password() {
//       return this.password.toUpperCase();
//     }

//     set password(num) {
//         this._password=num.toUpperCase();
//     }
// }


// const usr=new user("usr@gmail.com","1234");
// console.log(usr.password);// getting error call stack size exceeded at get password 


// class user {
//     constructor (email,password) {
//         this.email=email;
//         this.password=password;
//     }

//     get password() {
//       return this._password.toUpperCase();// _ represents private property
//     }

//     set password(num) {
//         this._password=num;
//     }


//     get email() {
//       return this._email.toUpperCase();
//     }

//     set email(num) {
//         this._email=num;
//     }
// }


// const usr=new user("usr@gmail.com","abc");
// console.log(usr.password);// no error getting results;
// console.log(usr.email);











//***********IN EARLIER TIME WITHOUT CLASSES */

// function user(email,password) {
//     this._email=email;
//     this._password=password;

//     Object.defineProperty(this,'email', {
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set: function(val) {
//             this._email=val;
//         }
//     })


//     Object.defineProperty(this,'password', {
//         get: function(){
//             return this._password.toUpperCase();
//         },
//         set: function(val) {
//             this._password=val;
//         }
//     })
// }

// const user1=new user("usr@gmail.com","abcdefgh");
// console.log(user1.email);
// console.log(user1.password);





/********on object******************/


const user={
    _username: "usr.com",
    _pass: "abcdfer",

    get username() {
        return this._username.toUpperCase();
    },

    set username(num) {
        this._username=num;
    },

    get pass() {
        return this._pass.toUpperCase();
    },

     set pass(num) {
        this._pass=num;
    }

}
const usr= Object.create(user);
console.log(usr.username);
console.log(usr.pass);