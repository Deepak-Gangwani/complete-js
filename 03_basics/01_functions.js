function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

sayMyName()

// function addTwoNumbers(n1,n2){
//     console.log(n1+n2);
// }

function addTwoNumbers(n1,n2){
    let result=n1+n2
    //return result
    return n1+n2
}

const result=addTwoNumbers(3,5)

console.log("Result: ",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Deepak"))
console.log(loginUserMessage())


function calculateCartPrice(v1,v2, ...n1){
    return n1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"deepak",
    prices:100
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)
handleObject({
    username:"deepu",
    price:200
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


