const searchForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle ("active");

    document.addEventListener("click", function (e){
        if (!e.composedPath().includes(searchBtn)
        && !e.composedPath().includes(searchForm)
        
        ){
            searchForm.classList.remove("active");
        }
    });
})


const cartItem =document.querySelector(".cart-items-container");

const cardBtn = document.querySelector("#card-btn");


cardBtn.addEventListener("click", function (){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e){
        if (!e.composedPath().includes(cardBtn)
        && !e.composedPath().includes(cartItem)
        
        ){
            cartItem.classList.remove("active");
        }
    });


})


const navbar =document.querySelector(".navbar");

const menuBtn = document.querySelector("#menu-btn");


menuBtn.addEventListener("click", function (){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e){
        if (!e.composedPath().includes(menuBtn)
        && !e.composedPath().includes(navbar)
        
        ){
            navbar.classList.remove("active");
        }
    });


})