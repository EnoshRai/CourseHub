const cart=document.querySelector(".cart");
const cart_section=document.querySelector(".cart_section");
const closeCart=document.querySelector("#close_cart");

cart.addEventListener("click",showCart)
function showCart(){
        cart_section.style.display="block";    
}

closeCart.addEventListener("click",hideCart)
function hideCart(){
    cart_section.style.display="none";    
}
