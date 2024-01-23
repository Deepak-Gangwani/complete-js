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

const chai =function(){
    let username="Deepak"
    console.log(this.username);
}