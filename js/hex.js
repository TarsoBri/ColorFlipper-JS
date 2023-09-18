console.log('hex')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(){
    var currentColor = get6RandomItems()
    console.log(currentColor)

    document.body.style.backgroundColor = `#${currentColor}`;
    color.style.color = `#${currentColor}`;
    color.textContent = `#${currentColor}`;
    
}

function get6RandomItems(){
    var sixRandomNumber = [];

    for(var i = 0; i < 6; i++){
        let chosenColor = '';
        chosenColor = Math.floor(Math.random() * hex.length);
        sixRandomNumber += hex[chosenColor];
    }
    return sixRandomNumber.toLowerCase();
}

 