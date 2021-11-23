export default function menuHamburger(btnMenu,list,enlace){
    const menuBtn = document.querySelector(btnMenu);
    const lista= document.querySelector(list);
    let itemList= document.querySelectorAll(enlace);


   menuBtn.addEventListener("click",()=>{
        lista.classList.toggle("is-active"); 
        menuBtn.classList.toggle("is-active");
    })
    lista.addEventListener("click",()=>{
        lista.classList.remove("is-active"); 
        menuBtn.classList.remove("is-active");
    })
}