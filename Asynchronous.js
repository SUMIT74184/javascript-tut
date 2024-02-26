//asyn wait>>promise chains>>callback hell
// console.log("1")
// console.log("12")
// console.log("13")
//synchronous programming is always initated line by line




//asynchronous programming is initiated over here
const hello1=()=>{
  console.log("hello sumit after 2 secs");
}

setTimeout(hello1,2000);

console.log("hii")

//call back functionn


//first function
function sum(a,b){
   console.log(a+b);
  return a+b;
}

//second function
function calc(m,bn,sumcallback){
  sumcallback(m,bn);
}
//calling it out
calc(21,43,sum);
//second way for the callback functions
calc(21,32,(a,b)=>{
  console.log(a+b);
});



//callback
// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//       getNextData();
//     }

//   },2000)

// }
//callback hells----nested callbacks---forming the pyramid structures
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3)
//   });
// });

//promises

// let promise=new Promise((resolve,reject)=>{
// console.log(" promisess");
// resolve("promblem is resolved");
// reject("some error occured");
// })


// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     console.log("data",dataId);
//     resolve("success");
//     if(getNextData){
//       getNextData();
//     }

//   },2000);
// });
// }



// const getPromise=()=>{
//  return  new Promise((resolve,reject)=>{
//     console.log("i am promise");
//     resolve("success");
//   });
// };

// let promise=getPromise();
// promise.then((res)=>{
//   console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//   console.log("rejected",err);
// });


//first api function
function asynchfunction(){
  return new Promise((r,re)=>{
    setTimeout(()=>{
      console.log("wheather details");
      r("success");
    },3000);
  });
}


// second api function
function asynchfunction1(){
  return new Promise((r,re)=>{
    setTimeout(()=>{
      console.log("smoke details");
      r("success");
    },4000);
  });
}

// console.log("fetching the data1.....");
// let p1=asynchfunction();//storing the function inside the variable
// p1.then((res)=>{//passing the "then"
//   // console.log(res);
// });

// console.log("fetching the data2......");
// let p2=asynchfunction1();
// p2.then((res)=>{
// // console.log(res);
// })

console.log("fetching the data1.....");
let p1=asynchfunction();//storing the function inside the variable
p1.then((res)=>{//passing the "then"
 
console.log("fetching the data2......");
let p2=asynchfunction1();
p2.then((res)=>{
});
});

// promise chain

function getData(data, getNextId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("data",data);
    resolve("success")
    },5000);
  });
};

// getData(12).then((res)=>{
//   return getData(21);
// })
// .then((res)=>{
//   return getData(31);
// })
// .then((res)=>{
//   return getData(res);
// });

//async and await

async function getAllData(){
  console.log("getting data1...");
  await getData(21);
  console.log("getting data2....")
  await getData(321);
  console.log("getting the data3....");
  await getData(211)
}
getAllData();



//async and awaits
async function hell(){
  console.log("where satan lives")
  //return the promise as it is
}

function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("traffic details");
      resolve(200);
    },4500)
  });
}


//to call the above function
// api().then((res)=>{
//   console.log(res);
// })

async function getWheatherData(){
  await api();
}

