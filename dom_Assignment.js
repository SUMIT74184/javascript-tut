let newbtn=document.createElement("button");
newbtn.innerText="click me!";


//inline css
newbtn.style.color="black";
newbtn.style.backgroundColor="orange";
newbtn.style.borderRadius="20px";


// document.querySelector("body").prepend(newbtn)
document.querySelector("body").append(newbtn);


let para=document.querySelector("p")
// console.log(para.setAttribute("class","newClass"));//setattribute always overrides the existing class in the javascript
para.classList.add("newClass");
console.log(para.getAttribute("class"))