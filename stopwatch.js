let timer;
let seconds = 0;
let isRunning = false;

//getting elements from html
const display = document.getElementById('display');
const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');
const resetBtn = document.getElementById('resetbtn');

//fuction for the screen display
function updateDisplay() {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0'); //padstart will add zeros on the display
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
}

//manipulating  the start btn
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;

        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

//manipulating the stop btn
stopBtn.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

//manipulating the stop btn
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});