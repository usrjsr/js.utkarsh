function User(username,loggedin,logincnt) {
    this.username=username;
    this.loggedin=loggedin;
    this.logincnt=logincnt;

    return this;
}

// const userone=User("utkarsh",true,11);
// const usertwo=User("usr",false,23);
// console.log(userone);
// console.log('////');
// console.log(usertwo);
//***************** output****/
// username: 'usr',
//   loggedin: false,
//   logincnt: 23
//getting overwritted as no new instance is created


//*****************using NEW***** */

const userone=new User("utkarsh",true,11);
const usertwo= new User("usr",false,23);
console.log(userone);
console.log('////');
console.log(usertwo);

/*********************OUTPUT** */
// User { username: 'utkarsh', loggedin: true, logincnt: 11 }
// ////
// User { username: 'usr', loggedin: false, logincnt: 23 }
//new instance is created so value is not getting overwritted