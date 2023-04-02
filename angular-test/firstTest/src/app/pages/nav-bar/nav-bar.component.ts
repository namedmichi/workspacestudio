import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  isDark$: boolean = true;
  
  
  
  setDark(){

    if (this.isDark$) {
      alert("Light mode ist WIP")
      
      document.body.style.backgroundColor = "var(--Very-Light-Gray)"
      
      var ps = document.getElementsByTagName("p")
      var navs = document.getElementsByTagName("nav")
      var h2s = document.getElementsByTagName("h2")
      var h3s = document.getElementsByTagName("h3")
      var cards = document.getElementsByName("country-cardes")
      var drop = document.getElementsByName("dropdown-content")
      var drop2 = document.getElementsByName("dropbtn")
      var inpu = document.getElementsByName("nameInpu")
      var inpu2 = document.getElementsByName("icon")
      for (let index = 0; index < ps.length; index++) {
        const element = ps[index];
        element.style.color = "black"
        
      }
      for (let index = 0; index < inpu.length; index++) {
        const element = inpu[index];
        element.style.backgroundColor = "white"
        element.style.color ="black";

        
      }
      for (let index = 0; index < inpu2.length; index++) {
        const element = inpu2[index];
        element.style.backgroundColor = "white"
        
      }
      for (let index = 0; index < h2s.length; index++) {
        const element = h2s[index];
        element.style.color = "black"
        
      }
      for (let index = 0; index < h3s.length; index++) {
        const element = h3s[index];
        element.style.color = "black"
        
      }
      for (let index = 0; index < cards.length; index++) {
        const element = cards[index]
        element.style.backgroundColor = "white";
        
        
      }
      for (let index = 0; index < navs.length; index++) {
        const element = navs[index]
        element.style.backgroundColor = "white";
        
        
      }
      for (let index = 0; index < drop.length; index++) {
        const element = drop[index]
        element.style.backgroundColor = "white";
        element.style.color = "black"

        
        
      }
      for (let index = 0; index < drop2.length; index++) {
        const element = drop2[index]
        element.style.backgroundColor = "white";
        element.style.color = "black"

        
        
      }
      this.isDark$ = false;
    }else{
      document.body.style.backgroundColor = "var(--Very-Dark-Blue2)"
      
      var ps = document.getElementsByTagName("p")
      var navs = document.getElementsByTagName("nav")
      var h2s = document.getElementsByTagName("h2")
      var h3s = document.getElementsByTagName("h3")
      var cards = document.getElementsByName("country-cardes")
      var drop = document.getElementsByName("dropdown-content")
      var drop2 = document.getElementsByName("dropbtn")
      var inpu = document.getElementsByName("nameInpu")
      var inpu2 = document.getElementsByName("icon")
      for (let index = 0; index < ps.length; index++) {
        const element = ps[index];
        element.style.color = "white"
        
      }
      for (let index = 0; index < inpu.length; index++) {
        const element = inpu[index];
        element.style.backgroundColor ="var(--Very-Dark-Blue)";
        element.style.color ="white";
        
      }
      for (let index = 0; index < inpu2.length; index++) {
        const element = inpu2[index];
        element.style.backgroundColor ="var(--Very-Dark-Blue)";
        
      }
      for (let index = 0; index < h2s.length; index++) {
        const element = h2s[index];
        element.style.color = "white"
        
      }
      for (let index = 0; index < h3s.length; index++) {
        const element = h3s[index];
        element.style.color = "white"
        
      }
      for (let index = 0; index < cards.length; index++) {
        const element = cards[index]
        element.style.backgroundColor = "var(--Very-Dark-Blue)";
        
        
      }
      for (let index = 0; index < navs.length; index++) {
        const element = navs[index]
        element.style.backgroundColor = "var(--Dark-Blue)";
        
        
      }
      for (let index = 0; index < drop.length; index++) {
        const element = drop[index]
        element.style.backgroundColor = "var(--Very-Dark-Blue)";
        element.style.color = "white"

        
        
      }
      for (let index = 0; index < drop2.length; index++) {
        const element = drop2[index]
        element.style.backgroundColor = "var(--Very-Dark-Blue)";
        element.style.color = "white"

        
        
      }
      this.isDark$ = true;
    }
  }

}
