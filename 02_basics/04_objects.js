// const tinderUser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"deepu@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Deepak",
            lastname:"Gangwani",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj3)

// spread of object or cancatenation
const obj3={...obj1,...obj2}

console.log(obj3);


const users=[
    {
        id:1,
        email: "d@gmail.com",
    },
    {
        id:1,
        email: "d@gmail.com",
    }, {
        id:1,
        email: "d@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"JS",
    price: "999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor}=course


// console.log(courseInstructor);
console.log(instructor);

{
    "name": "deepak",
    "coursename": "JS",
    "price":"0"
}


[
    {},
    {},
    {}
]