function keyDown(event) {
    if (event.keyCode == 37) {
        var elm = document.getElementById("circle");
        var posLeft = elm.offsetLeft;
        elm.style.left = posLeft - 10 + 'px';
    }
    if (event.keyCode == 38) {
        var elm = document.getElementById("circle");
        var posLeft = elm.offsetTop;
        elm.style.top = posLeft - 10 + 'px';
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

function whenLoaded() {
    document.addEventListener("keydown", keyDown);
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});
