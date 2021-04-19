// JavaScript source code
let frogArr = ["https://savethefrogs.com/wp-content/uploads/Poison-Dart-Frog-1-1920px.jpeg",
    "https://cdn.britannica.com/84/206384-131-207CC735/Javan-gliding-tree-frog.jpg",
    "https://www.aquariumofpacific.org/images/made_new/images-exhibits-Solomon_Island_Leaf_Frog_900_600_q85.jpg",
    "http://cosmos.tt123.com.au/wp-content/uploads/2020/02/190328-frog-full.jpg",
    "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg"]



let current = 0;

function previous() {
    let img = document.getElementById("imgFrog");
    if (current == 0) {
        current = 4;
    }
    else {
        current--;
    }
    img.src = frogArr[current];
    img.height = 500;
    img.width = 800;
}

function next() {
    let img = document.getElementById("imgFrog");
    if (current == 4) {
        current = 0;
    }
    else {
        current++;
    }
    img.src = frogArr[current];
    img.height = 500;
    img.width = 800;
}