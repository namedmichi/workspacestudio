function setDark() {
    document.getElementById("wrapper").style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByClassName("text").style.color = "white";
}
function setLight() {
    document.getElementById("wrapper").style.backgroundColor = "white";
    document.body.style.color = "var(--Dark-Grayish-Blue)";
    document.getElementsByClassName("text").style.color = "var(--Dark-Grayish-Blue)";
}