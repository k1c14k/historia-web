const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        display: '',
        prevValue: '',
        operator: '',
        resetNext: 'false'
    });
});

app.post('/', (req, res) => {
    let { hiddenDisplay, prevValue, operator, resetNext, btn } = req.body;
    let display = hiddenDisplay || '';

    if (btn >= '0' && btn <= '9') {
        if (resetNext === 'true') {
            display = btn;
            resetNext = 'false';
        } else {
            display = display === '0' ? btn : display + btn;
        }
    } else if (btn === 'C') {
        display = '';
        prevValue = '';
        operator = '';
        resetNext = 'false';
    } else if (['+', '-', '*', '/'].includes(btn)) {
        if (display !== '') {
            prevValue = display;
            operator = btn;
            resetNext = 'true';
        }
    } else if (btn === '=') {
        if (prevValue !== '' && operator !== '' && display !== '') {
            const a = parseFloat(prevValue);
            const b = parseFloat(display);
            let result;
            switch (operator) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = b !== 0 ? a / b : 'Error'; break;
            }
            display = result.toString();
            prevValue = '';
            operator = '';
            resetNext = 'true';
        }
    }

    res.render('index', { display, prevValue, operator, resetNext });
});

app.listen(port, () => {
    console.log(`Etap 1 (Refactor) server running at http://localhost:${port}`);
});
