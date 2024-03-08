var timerLeft = 0, timerUp, timerRight, timerDown;

function keyDown(event) {
    if (event.keyCode == 37) {
        timerLeft = setInterval(() => {
            var elm = document.getElementById("circle");
            var posLeft = elm.offsetLeft;
            elm.style.left = posLeft - 10 + 'px';
        }, 100);
    }
    if (event.keyCode == 38) {
        timerUp = setInterval(() => {
            var elm = document.getElementById("circle");
            var posLeft = elm.offsetTop;
            elm.style.top = posLeft - 10 + 'px';
        }, 100);
    }
    if (event.keyCode == 39) {
        var elm = document.getElementById("circle");
        var posLeft = elm.offsetLeft;
        elm.style.left = posLeft + 10 + 'px';
    }
    if (event.keyCode == 40) {
        var elm = document.getElementById("circle");
        var posLeft = elm.offsetTop;
        elm.style.top = posLeft + 10 + 'px';
    }
}

function keyUp(event) {
    if (event.keyCode == 37) {
        clearInterval(timerLeft);
    }
    if (event.keyCode == 38) {
        clearInterval(timerUp);
    }
    if (event.keyCode == 39) {
        
    }
    if (event.keyCode == 40) {
        
    }
}

function whenLoaded() {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});
