function whenLoaded() {
    ex2();
}

function ex1() {
    var element = document.getElementById("text-input");
    var element2 = document.getElementById("button-input");
    element2.addEventListener("click", () => {
        alert(element.value);
    });
}

function ex2() {
    var element = document.getElementById("mydiv");
    var element2 = document.getElementById("text-input");
    var element3 = document.getElementById("button-input");
    element3.addEventListener("click", () => {
        element.firstChild.nodeValue = element2.value;
    })
}


document.addEventListener("DOMContentLoaded", () => {
    whenLoaded();
});