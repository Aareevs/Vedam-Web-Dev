const count = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

let countvalue = 0;

incrementBtn.addEventListener('click', () => {
    countvalue++;
    count.textContent = countvalue;
});

decrementBtn.addEventListener('click', () => {
    countvalue--;
    count.textContent = countvalue;
});

resetBtn.addEventListener('click', () => {
    countvalue = 0;
    count.textContent = countvalue;
});