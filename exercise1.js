// JavaScript source code

function verify() {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    if (pass1.value != pass2.value) {
        alert("Passwords do not match");
    }
    else if (pass1.value.length < 8) {
        alert("Password needs to be at least 8 characters long");
    }
    else if (pass1.value == pass2.value) {
        alert("Passwords match and meet all criteria");
    }
    else {
        alert("Unforseen error occured");
    }
}