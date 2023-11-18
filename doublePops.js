const upBtn = document.querySelector("#upBtn");
const main = document.querySelector("#main");
const topBtn = document.querySelector("#topBtn");
const bottomBtn = document.querySelector("#bottomBtn");

const topSec = document.querySelector("#topSec");
const bottomSec = document.querySelector("#bottomSec");

//Create condition for opening modal
upBtn.addEventListener("click", function() {
    main.classList.add('active');
});

//Create condition for closing top and bottom buttons before removing modal
let closeButtonCounter = 2;

function closeButtonClicked() {
    topBtn.addEventListener("click", function() {
        topSec.classList.add('topActive');
        closeButtonCounter--;
        console.log("You dey try guy", closeButtonCounter);
    });

    bottomBtn.addEventListener("click", function() {
        bottomSec.classList.add('bottomActive');
        closeButtonCounter--;
        console.log("You dey try guy", closeButtonCounter);
    });

    if (closeButtonCounter === 0) {
        main.classList.remove('active');
    }
}

closeButtonClicked();