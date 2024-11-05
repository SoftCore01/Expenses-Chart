
let bars = document.querySelectorAll(".bar");
let topper  = document.querySelectorAll(".topper");

for (let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("mouseover", () => {
       topper[i].style.display = "block" ;
       topper[i].textContent = "$20.00";
    })

    bars[i].addEventListener("mouseout", () => {
       topper[i].style.display = "none" ;
    })

};

