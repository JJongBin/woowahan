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

// 코드 수정 필요...
const sub1 = document.querySelector("#sub1");
const sub2 = document.querySelector("#sub2");
const sub3 = document.querySelector("#sub3");
const sub4 = document.querySelector("#sub4");
const sub5 = document.querySelector("#sub5");

sub1.addEventListener("click", function() {
    sub1.children[1].classList.remove("hidden")
    sub2.children[1].classList.add("hidden")
    sub3.children[1].classList.add("hidden")
    sub4.children[1].classList.add("hidden")
    sub5.children[1].classList.add("hidden")
})
sub2.addEventListener("click", function() {
    sub1.children[1].classList.add("hidden")
    sub2.children[1].classList.remove("hidden")
    sub3.children[1].classList.add("hidden")
    sub4.children[1].classList.add("hidden")
    sub5.children[1].classList.add("hidden")
})
sub3.addEventListener("click", function() {
    sub1.children[1].classList.add("hidden")
    sub2.children[1].classList.add("hidden")
    sub3.children[1].classList.remove("hidden")
    sub4.children[1].classList.add("hidden")
    sub5.children[1].classList.add("hidden")
})
sub4.addEventListener("click", function() {
    sub1.children[1].classList.add("hidden")
    sub2.children[1].classList.add("hidden")
    sub3.children[1].classList.add("hidden")
    sub4.children[1].classList.remove("hidden")
    sub5.children[1].classList.add("hidden")
})
sub5.addEventListener("click", function() {
    sub1.children[1].classList.add("hidden")
    sub2.children[1].classList.add("hidden")
    sub3.children[1].classList.add("hidden")
    sub4.children[1].classList.add("hidden")
    sub5.children[1].classList.remove("hidden")
})


