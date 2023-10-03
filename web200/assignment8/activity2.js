const btn = document.querySelector('.btn');
const number = document.querySelector('.num');
const iteration = document.querySelector('.iter');
const output = document.querySelector('.res');

btn.addEventListener('click', () => {
    

    const array= [];

    output.innerHTML = '';

    for(let i = 1; i <= iteration.value; i++){
        array[i] = `[${number.value} * ${i} = ${number.value * i}]`;
        const list = document.createElement('li');
        list.textContent = array[i];
        output.appendChild(list);
    }
    
});