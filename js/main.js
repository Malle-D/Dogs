var elHeader = document.querySelector(".header");
let elLupa = document.querySelector(".menu__input-controller");

elLupa.addEventListener('click', function(){
    elHeader.classList.toggle("header--opener");
})


let elSpan = document.querySelector(".menu__input-controller");
let elImg = document.querySelector(".menu__input-lupa");

elSpan.addEventListener('click', function(){
    elImg.classList.toggle("transform");
})


let elHeaderHamburg = document.querySelector(".menu__box");

elHeaderHamburg.addEventListener('click', function(){
    elHeader.classList.toggle("header--active");
})
function myFunction(x) {
    x.classList.toggle("change");
}

let elList = document.querySelector(".menu");
let elBasket = document.querySelector(".menu__basket-img");

elBasket.addEventListener('click', function(){
    elList.classList.toggle("menu--active");
})

