console.log(`hi`);
console.log(`sup`);


let x = 100;

console.log(x);

//window.alert(x);

let age = 23;

console.log(`You are ${age} years old`);

let y;

console.log(typeof y);

let fullName = "Phong";

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = `You are ${age} years old`

let userName;

document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Sup ${userName}`
   
}

