console.log("sumit rai");

let marks_student1=98;
let marks_student2=90;

let marks={

  student1:90,
  divsion:2,
  Name:"summer_io",
  location:"southcarolina"
}
console.log(marks);

//alternate to store the objects material are 
//arrays


//syntax
let hero=["ironman","batman","spiderman","thor"];
console.log(hero);

let studcount=[32,43,54,65,76,87];
console.log(studcount);
console.log(studcount.length);//property of an arrays
typeof(studcount);


//arrays indices
console.log(studcount[3]);

studcount[3]=32;
console.log("updating the new values.....");
console.log(studcount[3]);
console.log(studcount[1]);
console.log(studcount[4]);
console.log(studcount[2]);

//looping over the arrays
console.log("now the series of values are comming now");
for(let i=0;i<hero.length;i++){
console.log(hero[i]);
}

let cities=["pune","mumbai","banglore","hyderabad","pink_city"];
for(let city of cities){
  console.log(city.toUpperCase());
  console.log(city.toLowerCase());
}


//logical programming for summing the number
let score=[56,54,33,65,76];
let sum=0;
let ans;
for(let i=0;i<score.length;i++){
  sum+=score[i];
   ans=sum/score.length;

}
console.log(ans);

let item=[250,645,300,900,50];
let dicount=0;
for(let i=0;i<item.length;i++){
  discount=item[i]/10;
  item[i]-=discount;

}
console.log(item);



//arrays method to use
let veggies=["onion","toamato","apple","pine"]
console.log(veggies);
//push
veggies.push("pasta","chips","burger","paneer");
console.log(veggies)

//pop()
veggies.pop();
console.log(veggies);


//to convert any arrays into the strings
console.log("printing the string val",veggies.toString());


//concat
let indian=["krish","insepector_chingam"]
let marvel_heroes=["thor","spiderman","ironman"];
let dc_heros=["superman","batman"];
let saviours=marvel_heroes.concat(dc_heros,indian);
console.log(saviours);


let surviours=dc_heros.concat(marvel_heroes,indian);
console.log(surviours);

//unshift()
indian.unshift("professor_dhomeketu");
console.log(indian);

//slice()
console.log(marvel_heroes.slice(0,3));
//can also be use to make the copy of an arrays
console.log("making the cpoy",marvel_heroes.slice());


// Splice()---changes the origninal arrays
let arr=[1,2,3,4,5,6,7,8];
arr.splice(2,2,101,103);// to add the number
console.log(arr);
arr.splice(4,1,54);//to remove that sepecific number and replacing the number
console.log(arr);


arr.splice(4);
console.log(arr);//after the 4th index all the elment are deleted completely


