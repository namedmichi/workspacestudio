function clickLess(){
    var count = parseInt(document.getElementById("counter").innerHTML);
    if (count > 0){
        count = count-1;
        document.getElementById("counter").innerHTML = count;
    }
}
function clickMore(){
    var count = parseInt(document.getElementById("counter").innerHTML);
    if (count >= 0){
        count = count+1;
        document.getElementById("counter").innerHTML = count;
    }
}
function showCart(){
    if (document.getElementById("cart").style.display == "none"){
        document.getElementById("cart").style.display = "flex"
    }else{
        document.getElementById("cart").style.display = "none"
    }
}
function addCart(){
    var prize = 125
    var count = parseInt(document.getElementById("counter").innerHTML);
    if (count > 0){
        document.getElementById("empty").style.display = "none"
        document.getElementById("full").style.display = "block"
        document.getElementById("times").innerHTML = count
        var total = prize * count
        document.getElementById("total").innerHTML = "&nbsp;&nbsp;$" + total + ".00"
    }
}
function cartRemove(){
    document.getElementById("empty").style.display = "block"
    document.getElementById("full").style.display = "none"
}