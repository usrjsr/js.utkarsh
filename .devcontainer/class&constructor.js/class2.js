//************INHERITANCE**********/


class user {
    constructor(username){
        this.username=username;
    }

    login(){
        console.log(`USER ${this.username} LoggedIn`)
    }
}

class teacher extends user {
    constructor(username,email,password) {
        super(username);
        this.email=email;
        this.password=password;
    }
   
    upper() {
        console.log(`${this.username.toUpperCase()}`);
    }

}

const user1=new user("usr");
const teacher1=new teacher("jsr","jsr@gmail.com","123");

teacher1.login();
user1.login();
teacher1.upper();
//user1.upper();//as user is inherited to teacher so the propertie of user can be used by teacher but the property of teacher cannoot be used by the user

console.log(user1 instanceof teacher);//false
console.log(teacher1 instanceof user);//true

