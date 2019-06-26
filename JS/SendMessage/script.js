const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);

function sendMessage(){
    let content = messageIn.value;
    if(content === ''){
        alert('Enter valid value');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}