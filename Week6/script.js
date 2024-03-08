function keyDown(event) {
    console.log(event.keyCode);
}

function whenLoaded() {
    document.addEventListener("keydown", keyDown);
}

document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});
