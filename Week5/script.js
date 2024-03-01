function whenLoaded() {
    var element = document.getElementById("circle");
    element.addEventListener("click", () => {
        element.style.opacity = 0.5;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});