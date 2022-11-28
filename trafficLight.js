const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    }else{
        colorIndex = 0;
        }

}


const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'red':    () => img.src = './assets/vermelho.png',
    'yellow': () => img.src = './assets/amarelo.png',
    'green':  () => img.src = './assets/verde.png',
    'automatic': () => setInterval(changeColor, 1000),
}

buttons.addEventListener('click', trafficLight)