const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByClassName("small-img");
    var bigimg = document.getElementById("big-img");
    // Add click event listener to each image
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {

            bigimg.src = this.src;  // Change this line based on your requirements
        });
    }
});