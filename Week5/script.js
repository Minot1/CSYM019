function whenLoaded() {
    var element = document.getElementById("circle");
    element.style.opacity = 1;
    element.addEventListener("click", () => {
        var offset = element.offsetLeft;
        element.style.left = offset - 10 + 'px';
    });
}

function myInterval() {
    var element = document.getElementById("circle");
    element.style.opacity = parseFloat(element.style.opacity) - 0.01;
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
    setInterval(myInterval, 100);
});
