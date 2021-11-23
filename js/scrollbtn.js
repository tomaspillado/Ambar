export default function scrllButton(btn){
    const scrollBtn= document.querySelector(btn);
        window.addEventListener("scroll",()=>{
            let scrollTop= window.pageYOffset; //DIFERENCIA ENTRE TOP DEL DOC Y EL SCROLL
            if (scrollTop>600){ //SI EL SCROLL ES MAYOR A 600PX SE VA A MOSTRAR EL BOTON
                scrollBtn.classList.remove("hidden");
            }
                else{
                    scrollBtn.classList.add("hidden");
                }
        })
        scrollBtn.addEventListener("click",()=>{
                window.scrollTo({
                    behavior: "smooth",
                    top: 0
                })
        })
    
}