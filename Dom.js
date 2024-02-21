//document object model
//html-structure
//css-style
//javascript-logics

console.log("hello");
// alert("sumit_server")

window.console.log("hello again window")

// window.document

console.dir(window.document)//print the method of the documents

console.dir(document.body);

console.log(document.head);

console.log(document.body.childNodes[0]);

document.body.style.background="light-blue";//dynamic changes ----dyanmica manipulation

let headin=document.getElementById("heading");
console.dir(headin);

let Myclass1=document.getElementsByClassName("Myclass");
console.dir(Myclass1);
console.log(Myclass1);

// let button=document.getElementById("submit");
// console.dir(button);
// // console.log(button);

let paras=document.getElementsByTagName("p");
console.log(paras);
