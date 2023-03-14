var number = 0


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


function clickPic1(){
    document.getElementById("product-img").style.background = "url('images/image-product-1.jpg') no-repeat no-repeat"
    document.getElementById("product-img").style.backgroundSize = "400px"
}

function clickPic2(){
    document.getElementById("product-img").style.background = "url('images/image-product-2.jpg') no-repeat no-repeat"
    document.getElementById("product-img").style.backgroundSize = "400px"
}

function clickPic3(){
    document.getElementById("product-img").style.background = "url('images/image-product-3.jpg') no-repeat no-repeat"
    document.getElementById("product-img").style.backgroundSize = "400px"
}

function clickPic4(){
    document.getElementById("product-img").style.background = "url('images/image-product-4.jpg') no-repeat no-repeat"
    document.getElementById("product-img").style.backgroundSize = "400px"
}
function openNav() {
    document.getElementById("nav-overlay").style.display = "block"
    document.getElementById("nav-overlay").style.width = "100%";
    document.body.classList.add("overlay-active");
  }
  
function closeNav() {
    document.getElementById("nav-overlay").style.display = "none";
    document.getElementById("nav-overlay").style.width = "0%";
    document.body.classList.remove("overlay-active");
  }

function nextPic(){
    if (number < 3){
        number += 1;
        switch (number) {
            case 1:
                
                document.getElementById("product-img").style.background = "url('images/image-product-2.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            case 2:
                document.getElementById("product-img").style.background = "url('images/image-product-3.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            case 3:
                document.getElementById("product-img").style.background = "url('images/image-product-4.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            
            default:
                break;
        }
    }
}
function prevPic(){
    if (number > 0){
        number -= 1;
        switch (number) {
            case 1:
                
                document.getElementById("product-img").style.background = "url('images/image-product-2.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            case 2:
                document.getElementById("product-img").style.background = "url('images/image-product-3.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            case 0:
                document.getElementById("product-img").style.background = "url('images/image-product-1.jpg') no-repeat no-repeat"
                document.getElementById("product-img").style.backgroundSize = "370px"
                break;
            
            default:
                break;
        }
    }
}