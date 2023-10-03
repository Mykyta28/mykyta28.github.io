const btn = document.querySelector('.btn');
const number = document.querySelector('.num');
const iteration = document.querySelector('.iter');
const output = document.querySelector('.res');

btn.addEventListener('click', () => {
    

    output.innerHTML = '';

    for (let i = 1; i <= iteration.value; i++) {
        const expression = `${number.value} * ${i} = ${number.value * i}`;
        const list = document.createElement('li');
        list.textContent = expression;
        output.appendChild(list);
    }
});