
const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const myP = document.getElementById("myP");


myBtn.onclick = function(){


switch(Number(myInput.value)){
    case 1:
        myP.textContent = `It is Mon`;
        break;
    case 2:
        myP.textContent = `It is Tues`;
        break;
    case 3:
        myP.textContent = `It is Wed`;
        break;        
    case 4:
        myP.textContent = `It is Thurs`;
        break;
    case 5:
        myP.textContent = `It is Fri`;
        break;        
    case 6:
        myP.textContent = `It is Sat`;
        break;
    case 7:
        myP.textContent = `It is Sun`;
        break;
    }   
}

let userName = "Phong Tran";

let firstName = userName.slice(0, userName.indexOf(" "));
let lastName = userName.slice(userName.indexOf(" ") + 1);
console.log(firstName)

console.log(lastName)
