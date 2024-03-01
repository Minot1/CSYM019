function whenLoaded() {
    var element = document.getElementById("circle");
    element.addEventListener("click", () => {
        alert("Pressed.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});