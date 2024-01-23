// singleton
// object.create
// object literals

const mySum=Symbol("key1")

const JsUser={
    name:"Deepak",
    "full name":"Deepak Gangwani",
    [mySum]:"myKey1",
    age:18,
    location: "Jodhpur",
    email:"deepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])

JsUser.email="deepak@gmail.com"
// Object.freeze(JsUser)
JsUser.email="deepak@ibm.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

