const colors = ['Green','Red', 'Pink', 'Black', 'Purple', 'Blue', 'Orange', 'Yellow', '#A64D79', '#FF4545', 'rgb(252, 245, 150)', 'rgb(218, 212, 181)',
'#6A1E55', '#006A67', '#A64D79', 'rgba(133,122,200)', '#f15025', 'rgb(255, 156, 115)', 'rgb(203, 96, 64)', 'rgb(253, 139, 81)', 'rgb(152, 43, 28)', 'rgb(128, 0, 0)'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

console.log(btn, color)

btn.addEventListener('click', function(){
    
    const randomNumber = getRandomNumbers()
    const mainColor = document.querySelector('#main-color');
    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length)
}