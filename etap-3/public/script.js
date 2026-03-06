const display = document.getElementById('display');
let currentVal = '';
let prevVal = '';
let operator = null;
let resetNext = false;

document.querySelectorAll('.btn-num').forEach(btn => {
    btn.addEventListener('click', () => {
        if (resetNext) {
            currentVal = btn.textContent;
            resetNext = false;
        } else {
            currentVal = currentVal === '0' ? btn.textContent : currentVal + btn.textContent;
        }
        updateDisplay();
    });
});

document.querySelectorAll('.btn-op').forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentVal === '') return;
        if (prevVal !== '' && operator) {
            calculate();
        }
        operator = btn.getAttribute('data-op');
        prevVal = currentVal;
        resetNext = true;
    });
});

document.querySelector('.btn-equal').addEventListener('click', () => {
    if (prevVal === '' || !operator || currentVal === '') return;
    calculate();
    operator = null;
    prevVal = '';
    resetNext = true;
});

document.querySelector('.btn-clear').addEventListener('click', () => {
    currentVal = '';
    prevVal = '';
    operator = null;
    resetNext = false;
    updateDisplay();
});

function calculate() {
    const a = parseFloat(prevVal);
    const b = parseFloat(currentVal);
    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'Error'; break;
    }
    currentVal = result.toString();
    updateDisplay();
}

function updateDisplay() {
    display.value = currentVal || '0';
}
