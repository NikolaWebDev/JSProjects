const button = document.querySelector('.colorBtn');
const body = document.querySelector('body');

let colors = ['red', 'green', 'yellow', '#33ffe4'];

button.addEventListener('click', changeBgColor);

function changeBgColor(){
    let random = Math.floor(Math.random()*colors.length - 1);
    body.style.backgroundColor = colors[random];
}