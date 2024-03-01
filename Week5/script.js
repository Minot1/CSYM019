function whenLoaded() {
    var element = document.getElementById("circle");
    element.style.opacity = 0.5;
    element.addEventListener("click", () => {
        element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});