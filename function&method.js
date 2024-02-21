//functions and method
//block of code that perform the specific task

function myFunction(){
  console.log("learning the javascript tut")
}

myFunction();
myFunction();

function Add(a,b){
console.log(a+b);
}

// console.log(Add(34,56));
Add(32,456);


function Multi(x,y){
  s=x*y;
  return s;
}

let val=Multi(2,43);
console.log(val);


//arrow functions
const sum1=(a,b)=>{
  return a+b;
}

// console.log(sum1);

const Mult=(a,b)=>{
  console.log(a*b);
}
// console.log(Mult);
console.log("multiplication");
Mult(3,4);


let print=()=>{
  console.log("loading the screen....")
}
print();

function CountVowels(str){
  let count=0;
  for(let i=0;i<str.length;i++){
    let char=str[i];
    if(char==="a"|| char==="e "|| char==="i"|| char==="o"|| char==="u"){
      count++
    }
  }
  console.log(count);
}
CountVowels("sumit_rai")

const vow=(str)=>{
  let count=0;
  for(let i=0;i<str.length;i++){
    let char=str[i];
    if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
      count++
    }
  }
  console.log(count);
}

console.log("inside the arrow")
vow("sumit_patel");


//callback function

function abc() {
  console.log("hello javascript");
  
}

function defFunction(abc) {
  return abc(); // Invoke the abc function and return its result
}

 defFunction(abc); // Pass the abc function as an argument and invoke it
// console.log(a); // This will log "Returned from abc function"


//forEach function overhere

let arr=[1,2,3,4,5,6,7];
arr.forEach(function printval(val){
console.log(val);
});


let arr1=["mumbai","delhi","dhaka","columbo"]
console.log("    ");
arr1.forEach((val,i)=>{
  console.log(val.toUpperCase(),i);//printing the value of the arrays in the capital letters
});

//example
let Square=[2,4,5,6,7,8];
Square.forEach((val)=>{
 console.log(val*val);
  
})

//map method
//cretes the new arrays with result os some operations.the value its callback returns are used ro form new array

let nums=[23,34,45,67,78];
let newArr=nums.map((val)=>{
  // return val*2;
  return val/2;
})

console.log(newArr);

//filter method
let newF=nums.filter((val)=>{
  return val>29;
})
console.log(newF);

//reduce method
//performs the operation & reduces the array to single value.it returns that single value
//such as sum,avg,smallest,largest
let red=[2,4,6,7,9,10];
const output=red.reduce((prev,curr)=>{
  return prev+curr;
});
console.log(output);

const output1=red.reduce((prev,curr)=>{
  return prev>curr ?prev :curr;
});
console.log(output1);

//taking the input from ans user inside the arrays5656
let b=prompt("enter the number");
let arr2=[];
for(let i=1;i<=b;i++){
  arr2[i-1]=i;
}
console.log(arr2);

