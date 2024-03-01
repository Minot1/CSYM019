function whenLoaded() {
    var element = document.getElementById("circle");
    element.style.opacity = 0.5;
    element.addEventListener("click", () => {
        element.style.opacity = 1;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});