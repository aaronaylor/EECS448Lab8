// JavaScript source code

function change() {
    let paragraph = document.getElementById("paragraphEx");
    let borRed = document.getElementById("borRed");
    let borBlue = document.getElementById("borBlue");
    let borGreen = document.getElementById("borGreen");
    let borWidth = document.getElementById("borWidth");
    let backRed = document.getElementById("backRed");
    let backBlue = document.getElementById("backBlue");
    let backGreen = document.getElementById("backGreen");
    paragraph.style.borderColor = "" + borRed + borGreen + borBlue;
    paragraph.style.borderWidth = borWidth + "px";
    paragraph.style.backgroundColor = "" + backRed + backGreen + backBlue;
}