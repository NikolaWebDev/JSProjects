const lowerBtn = document.querySelector('#lowerCountBtn');
const addBtn = document.querySelector('#addCountBtn');
const counter = document.querySelector('.counter');

lowerBtn.addEventListener('click', lowerCount);
addBtn.addEventListener('click', addCount);
let count = 0;

function lowerCount(){
   count--;
   
   counter.innerHTML = count;
    if(counter.innerHTML < '0'){
       counter.style.color = 'red';
   }else if(counter.innerHTML === '0'){
    counter.style.color='white';
   }
   
   counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
   {duration:5000,fill:'forwards'});
}
function addCount(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = 'green';
    }
   else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
     }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:1000,fill:'forwards'});
}