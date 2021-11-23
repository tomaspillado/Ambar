import scrollButton from "/js/scrollbtn.js";
import menuHamburger from "/js/hamburger.js";
import slider from "/js/slider.js";

addEventListener("DOMContentLoaded",()=>{
    console.log("hola");
    menuHamburger(".menu-btn",".lista",".item");
    scrollButton(".scroll-btn");
    slider("#slider",".slider-brumas","#btn-right","#btn-left");
})
 
alert("hola");