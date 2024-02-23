function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

function changeHeader(newHeader) {
    var element = document.getElementById("page-heading");
    element.firstChild.nodeValue = newHeader;
}

function changeParagraph(newHeader) {
    var element = document.getElementById("page-p");
    element.firstChild.nodeValue = newHeader;
}

function clickH() {
    var element = document.getElementById("page-heading");
    element.addEventListener("click", () => {
        element.firstChild.nodeValue = "I am clicked";
    });
}

function clickP() {
    var element = document.getElementById("page-p");
    element.addEventListener("click", () => {
        element.firstChild.nodeValue = "I am clicked";
    });
}

function enterP() {
    var element = document.getElementById("page-p");
    element.addEventListener("mouseenter", () => {
        element.firstChild.nodeValue = "AAAAAAAAAAAAA";
    });
    element.addEventListener("mouseleave", () => {
        element.firstChild.nodeValue = "First p";
    });
}


document.addEventListener("DOMContentLoaded", () => {
    enterP();
});
// changeHeader("New heading");

