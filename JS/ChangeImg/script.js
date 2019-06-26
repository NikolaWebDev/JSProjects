const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let counter = 0;

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:1000,fill:'forwards'});
    if(counter === 4){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}

function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:1000,fill:'forwards'});
    if(counter === 0){
        counter = 5;
    }
    counter--;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}