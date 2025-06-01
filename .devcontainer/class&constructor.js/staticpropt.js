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

    static createId(){
        return 2232;
    }

}

const user1=new user("usr");
const teacher1=new teacher("jsr","jsr@gmail.com","123");

//console.log(teacher1.createId());// as static keyword is used so cannot be accessed
//console.log(user1.createId());//cannot be accesed
teacher1.login();//can be accesed as it is estends to property of user
