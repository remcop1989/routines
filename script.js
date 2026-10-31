const subroutineGeklikt = document.querySelector(".kleren-aandoen-knop");
const subroutineKlerenAandoen = document.querySelector(".subroutine-kleren-aandoen");

subroutineGeklikt.addEventListener("click", function() {
    console.log(subroutineKlerenAandoen);
    subroutineKlerenAandoen.style.visibility = "visible";
})