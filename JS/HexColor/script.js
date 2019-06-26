const bodyBcg = document.querySelector('body');
const colorBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');

let hexColors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    let color = '#';
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexColors.length);
        color += hexColors[random];
    }
    hex.innerHTML = color;
    bodyBcg.style.backgroundColor = color;
}