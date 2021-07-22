const logo = document.querySelector("#header .logo");
const modal = document.querySelector("#modal");
const bg = document.querySelector("#bg")
const menu = document.querySelector("#main-menu");

logo.addEventListener("mouseover", function() {
    logo.classList.remove("menu-change2")
    logo.classList.add("menu-change")
})

logo.addEventListener("mouseout", function() {
    logo.classList.remove("menu-change")
    logo.classList.add("menu-change2")
})

logo.addEventListener("click", function () {
    if(modal.classList.contains("hidden")){
        modal.classList.remove("hidden");
    }else{
        modal.classList.add("hidden");
    }

})
bg.addEventListener("click", function() {
    modal.classList.add("hidden")
})
menu.addEventListener("click", function(){
    // console.log("click")
});


