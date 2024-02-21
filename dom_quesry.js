// let elements=document.querySelector("p");
// console.dir(elements)

 let Allelements=document.querySelectorAll("p");
 console.dir(Allelements);

let elmId=document.querySelector("#heading");
console.dir(elmId);

// document.querySelector("div").children;

let x=90;
let y=70;

let heading=document.querySelector("h2");
console.dir(heading);
heading.innerText="david mils"
heading.innerHTML="<i>david_trends</i>"

// div.textContent;
// div.innerText="sumit_server";
// div.innerHTML="<p>lorem23</p>"

let div=document.querySelector("div");
console.dir(div);
// console.log(div);

let id1=div.getAttribute("id");
console.log(id1);// will provide the id value inside the div

let name=div.getAttribute("name");
console.log(name);//will provide the value of name attribute inside the div

// let pa=document.querySelector("p");
// console.log(pa);

let p1=document.querySelector("p");
console.log(p1.getAttribute("class"));
//this is also the way to print the value of para class


// to set the new value
let p=document.querySelector("p");
console.log(p.setAttribute("class","newClass"));
console.log(p.getAttribute("class"));


//style in js
let body=document.querySelector("body");
console.dir(body);
console.log(body.style);//will provide the inline style

p.style.color="blue"

//InsertElement

let newbtn=document.createElement("button");
newbtn.innerText="click me"
console.log(newbtn);


let div2=document.querySelector("div");
// div2.append(newbtn);
// div2.prepend(newbtn);
div2.after(newbtn);


let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>this the new h1 tag</>"
document.querySelector("body").append(newHeading);








//DeleteElement
newHeading.remove();

