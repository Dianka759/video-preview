console.log("page loaded...");

function playVid(element) {
    element.play();
}

function pauseVid(element) {
    element.pause();
}

function shadowOn(element) {
    element.classList.add("shadow");
}

function shadowOff(element) {
    element.classList.remove("shadow");
}