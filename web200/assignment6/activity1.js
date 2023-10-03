const btn = document.querySelector('.btn');
const number = document.querySelector('.num');
const iteration = document.querySelector('.iter');
const output = document.querySelector('.res');

btn.addEventListener('click', () => {
    let i = 1;

    output.innerHTML = '';

    while (i <= iteration.value) {
        const expression = `${number.value} * ${i} = ${number.value * i}`;
        const list = document.createElement('li');
        list.textContent = expression;
        output.appendChild(list);
        i++;
    }
    
});