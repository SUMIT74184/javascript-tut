 //object
//prototype in js

//object 1
const student={
  fullName:"sumit rai",
  marks:80.28,
  printMarks:function(){
    console.log("marks",this.marks);//this keywords same object is represented inside the "this "
  },
};
// console.log(student.marks);

let arr=["apple","mango","litchi"]
console.log(arr);
console.log(typeof(arr));

arr.push("strawberry");
console.log(arr);

const employee={
  calc(){
    console.log("tax rate is 10%");
  },

  calc1 :function(){
    console.log("second method to implement the function")

  },
};

const karan={
  salary:54443,
  calc(){
    console.log("the tax rate is 22%");
  },
};

karan.__proto__=employee;
console.log("karans tax rate for the system")
karan.calc();
//always the object similar function will be called if they both are same throughout the program
//we can also implement it for the multiple objects


//#classes 
// classes wiill have objects and spme state(variables )& some behaviour

class Myclass{
  Myclass(){
    console.log("inside the constructor");
  }

  start(){
    console.log("start the car");
  }

  stop(){
    console.log("stop the car");
  }

  fuel(){
    console.log("petrol and disel")
  }
  Part(){
    console.log("engine");
    console.log("driving");
  }
// setter
  setBrand(brand){
    this.brandName=brand;
  }
}
//variable ----object-----=new----className
let fortuner=new Myclass();
fortuner.setBrand("rover");//we are setting the name
let kia=new Myclass();
kia.setBrand("japanese_motor");


//constructor
//automatically invoked by new

class jetAirways{
  constructor(brand,mileage){
    console.log("inside the default constructor");
    this.brandName=brand;
    this.mileage=mileage;
  }
}
 let Airbus=new jetAirways("usa_airways",140);
 console.log(Airbus);
//  Airbus.brandName("usa_airways");
let boieng=new jetAirways("europe_airways",340);
console.log(boieng);


//inheritance

class Person{
  // constructor(name){

  //   this.speciesName="human";
  //   console.log("inside the person---parents");
  // }

  constructor(name){//using the super keyword
    this.name=name;
  }
  hello(){
    console.log("hello");
  }

  eat(){
    console.log("eat");
  }

  sleep(){
    console.log("sleep");
  }


  //method overriding 
  work(){
    console.log("do-nothing")
  }
}
//child class---derived class
class MasterStu extends Person{
  
  // constructor(branch){
  //   console.log("inside the cchild constructor")
  //   super();
  //   this.branchName=branch
  // }

  constructor(name){
        super(name);//calling the super keyword for inheritance
  }
  work(){//method overriding
    //always child class method is invoked in the inheritance concept
    console.log("research,problem-solver,manager");
  }
}

// let sumitstuobj=new MasterStu("general");
let sum=new MasterStu("sumit");
console.log(sum);
// sumitstuobj.work();
// let karanstuobj=new MasterStu("cybersecurity")

// console.log(sumitstuobj);


//super keywords
//the super keyword is used to call the construcot of its parent class to access the parents properties and methods
//child----->parents


//practice
class User{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }

}

class Admin extends User{
  constructor(name,email){
    super(name,email);
//super keywords form the child to parents class
    
  }
}
let s1=new User("admin","admin@email.com");
console.log(s1)

//error handling 
try{
let a=43;
let b=32;
console.log("a+b",-b/a);
console.log(b/c);
}
catch(err){

console.log(err)
}
console.log("program is still executing")






























