
// const code = document.querySelector("#main");
// const fun = document.querySelector("body");
// const with = document.querySelector("h2");




// const array = [1, 2, 3, 4, 5]
// const newarray = array.map(Element=> 
//       Element*2);
//       console.log(newarray);



// const Array = [1, 2, 3, 4]
// const NewArry = Array.filter(elm => elm % 3 == 0)
// // console.log(NewArry)

// const coder = {

//       name : "shivaay",
//       age: "21",
//       address: "new dehli",
//       skills: "FrontEnd development",

// }
 
// const {name: names} = coder

// console.log(names)



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}