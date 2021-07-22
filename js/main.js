const logo = document.querySelector("#header .logo");
const bg = document.querySelector("#bg")

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
    bg.addEventListener("click", function() {
        bg.classList.add("hidden")
    })
})


