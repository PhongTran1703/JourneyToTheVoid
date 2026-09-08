
const myButton = document.getElementById("myButton");
const display = document.getElementById("display")


myButton.onclick = function() {
    display.textContent = Math.floor(Math.random() * 6 + 1);

}