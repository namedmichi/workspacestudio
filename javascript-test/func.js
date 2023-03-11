function onClickChange(element) {
    element.innerHTML = "Test";
    element.style.color = "red";
    var element2 = document.createElement("div");
    element.appendChild(element2);
    element2.innerHTML = "Das ist ein Test div";
}