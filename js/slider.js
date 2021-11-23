export default function slider(sliderBox,brumaSlider,rightBtn,leftBtn){
    const slider = document.querySelector(sliderBox);
    let brumas = document.querySelectorAll(brumaSlider);
    let brumaLast = brumas[brumas.length -1] //SELECCIONO LA ULTIMA IMG
    const btnRight = document.querySelector(rightBtn);
    const btnLeft = document.querySelector(leftBtn);


    slider.insertAdjacentElement("afterbegin",brumaLast); //COLOCO A LA ULT IMG EN LA PRIMER POSICION.

    const next=()=>{
        let brumaFirst = document.querySelectorAll(".slider-brumas")[0];//seleccionamos la primer img
        slider.style.marginLeft ="-200%"; //cambiamos el enfoque a la sig img
        slider.style.transition = "all 0.5s";
        setTimeout(()=>{
            slider.style.transition="none";
            slider.insertAdjacentElement("beforeend",brumaFirst) //ENVIO A LA PRIMER IMG EN ULTIMO LUGAR
            slider.style.marginLeft ="-100%";
        },500)//EL TIMEOUT TIENE QUE SER EL MISMO TIEMPO QUE DURE LA TRANSICION
    }
    const prev=()=>{
        let brumas = document.querySelectorAll(".slider-brumas");
        let brumaLast = brumas[brumas.length -1] 
        slider.style.marginLeft ="0"; //cambiamos el enfoque a la anterior img
        slider.style.transition = "all 0.5s";
        setTimeout(()=>{
            slider.style.transition="none";
            slider.insertAdjacentElement("afterbegin",brumaLast); //COLOCO A LA ULT IMG EN LA PRIMER POSICION.
            slider.style.marginLeft ="-100%";
        },500)//EL TIMEOUT TIENE QUE SER EL MISMO TIEMPO QUE DURE LA TRANSICION
    }
    btnRight.addEventListener("click", ()=>{next()})
    btnLeft.addEventListener("click", ()=>{prev()})
}