var acc = document.getElementsByClassName("accordion");
var i ;
var activeaccor = 1;

  
for(i=0;i<acc.length;i++){
          //  var active =  document.getElementById(activeaccor);
          //      active.classList.remove("active");
          //   var activePannel = active.nextElementSibling;
          //   activePannel.style.display === "none";
        acc[i].addEventListener("click", function() {
                
                // activeaccor = this.id;
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

let hovermenu = document.getElementsByClassName("media")
let displaymenu = document.getElementsByClassName("hovermenu")
 hovermenu.addEventListener("hover", function(){
    displaymenu.style.visibility = true;
 })

