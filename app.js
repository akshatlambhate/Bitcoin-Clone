var acc = document.getElementsByClassName("accordion");
var i ;
 
for(i=0;i<acc.length;i++){
        acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
        
        var pannel = this.nextElementSibling;
        if (pannel.style.display === "block") {
          pannel.style.display = "none";
        } else {
          pannel.style.display = "block";
        }
});
}
function changeimg(){
  const image = [
    "media/BTC icon.svg",
    "media/ETH icon.svg",
    "media/shop.png"
  ]
  let change = document.getElementById("changecoin")
  const bg = image[Math.floor(Math.random()*image.length)];
  change.src = bg;
  
}
setInterval(changeimg ,1500);

