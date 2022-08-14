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
    'url("media/BTC icon.svg")',
    'url("media/ETH icon.svg")',
    'url("media/shoppingcart.png")'
  ]
  let change = document.getElementById("imgchange")
  const bg = image[Math.floor(Math.random()*image.length)];
  change.style.backgroundImage = bg;
  
}
setInterval(changeimg , 3000);

