const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(){
    var currentColor = getRandomNumber()

    document.body.style.backgroundColor = colors[currentColor]
    color.textContent = colors[currentColor]
}

function getRandomNumber(){
    let chosenColor = '';
    return chosenColor = Math.floor(Math.random() * colors.length);
}

 