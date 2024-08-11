// // Variables
let sliderImage = document.querySelectorAll('.slide'),
arrowRight = document.querySelector('#arrow-right'),
arrowLeft = document.querySelector('#arrow-left'),
current = 0;

// Functions

// Clear All Images
function reset(){
for(let i = 0; i < sliderImage.length; i++){
sliderImage[i].style.display = 'none';
}
}

// init slider
function startSlide(){
reset()
sliderImage[0].style.display = 'block'
}


// Show Prev
function slideLeft(){
reset()
sliderImage[current - 1].style.display = "block";
current--;
}


// // Show Next
function slideRight(){
reset()
sliderImage[current + 1].style.display = "block";
current++;
}


// // Events
arrowLeft.addEventListener('click', function (){
if(current === 0){
current = sliderImage.length;
}
slideLeft()
})

arrowRight.addEventListener('click', function (){
if(current === sliderImage.length-1){
current = -1;
}
slideRight()
})

startSlide()
