function openNav() {
    document.getElementById("myNav").style.width = "70%";
    document.body.classList.add("overlay-active");
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.body.classList.remove("overlay-active");
  }