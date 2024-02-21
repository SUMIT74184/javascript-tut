//Always javascript has the most priority

// let btn=document.querySelector("button");
// btn.innerText="submit";

// btn.style.color="black";

// document.querySelector("body").append(btn);

// btn.onclick=(e)=>{
//   console.log(e);
//   let count=0;
//   console.log("form submitted")
//   count++;
//   console.log(count);

// }



let par=document.querySelector("p");
par.onmouseover=(evt)=>{
  console.log(evt.clientX,evt.clientY);//event object
  console.log("you are inside the paragraph");
}

//event listeners

// btn.addEventListener("click",(evt)=>{
//   console.log("button was clicked")
//   console.log(evt);
//   console.log(evt.type);
// })

//creating the toggle button
let modebtn=document.querySelector("button");
let body=document.querySelector("body");
let currMode="light";



modebtn.addEventListener("click", () => {
  // console.log("changing the theme.....")
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  console.log(currMode);
});
