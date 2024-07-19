console.log("JavaScript файл успешно подключен!"); // Проверка подключения


const h1 = document.querySelector('#main_content h1');

const colors = ['#f0f0f0', 'lightblue']; 
let currentColor = 0;

const blinkInterval = setInterval(() => {
  h1.style.background = `radial-gradient(circle at center, ${colors[currentColor]} 0%, white 100%)`;
  currentColor = (currentColor + 1) % colors.length;
}, 1000);

setTimeout(() => {
  clearInterval(blinkInterval);
}, 5000);
