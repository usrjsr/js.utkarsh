new Promise(function(resolve,reject) {
  setTimeout(() => {
    //console.log('Promise I is completed');
    resolve();
  }, 1000);
}).then(()=>{
    //console.log('Promise I is consumed');
})



const promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            username: "_usr.jsr",
            email: "utkarsh@gmail.com"

        })
    }, 1000);
});

promise3.then((user)=>{
   console.log(user.username);
})

const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error) {
            resolve({username: "_usr.jsr",email: "utkarsh@gmail.com"});
        }
        else {
            reject('Error : Something Went Wrong');
        }
    })
})

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Either Promise is solved or rejected");
});


const promise5=new Promise((resolve,reject)=>{
   setTimeout(()=>{
        let error=true;
        if(!error) {
            resolve({username: "_usr.jsr",email: "utkarsh@gmail.com"});
        }
        else {
            reject('Error : Something Went Wrong');
        }
    },1000);
});

async function consumepromise5(){
    try {
        const response= await promise5;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumepromise5();

async function getAllUsers() {
   try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data=response.json();//we can't use json.parse as it's getting data in form of object....we can use json.parse if the data is getting into string
    console.log(data);
   } catch(error){
    console.log('Error:Something Went Wrong');
   }
}
getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})