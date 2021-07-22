const logo = document.querySelector("#header .logo");
const bg = document.querySelector("#modal");
const menu = bg.querySelector("#main-menu");

logo.addEventListener("mouseover", function() {
    logo.classList.remove("menu-change2")
    logo.classList.add("menu-change")
})

logo.addEventListener("mouseout", function() {
    logo.classList.remove("menu-change")
    logo.classList.add("menu-change2")
})

logo.addEventListener("click", function () {
    if(bg.classList.contains("hidden")){
        bg.classList.remove("hidden");
    }else{
        bg.classList.add("hidden");
    }

})
bg.addEventListener("click", function() {
    bg.classList.add("hidden")
    console.log("click")
})
menu.addEventListener("click", function(){
    // console.log("click")
});

// bg를 클릭시에 사라지는데 bg안의 메뉴를 클릭해도 사라짐  
