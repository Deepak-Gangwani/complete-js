const user={
    username:"Deepak",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);

function tea(){
    let username="deepak"
    console.log(this.username);
}

tea()

const tea =function(){
    let username="Deepak"
    console.log(this.username);
}

// tea()

// const addTwo=(n1,n2)=>{
//     return n1+n2
// }

// const addTwo=(n1,n2)=>n1+n2

// const addTwo=(n1,n2)=>(n1+n2)

const addTwo=(n1,n2)=>({username:"deepak"})

console.log(addTwo(3,4))

const myArray=[2,5,3,7,8]

myArray.forEach()