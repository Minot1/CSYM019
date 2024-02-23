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


document.addEventListener("DOMContentLoaded", () => changeHeader("New heading"));
// changeHeader("New heading");

