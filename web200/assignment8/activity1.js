const btn = document.querySelector('.btn');
const grade = document.querySelector('.grade');
const output = document.querySelector('.result');
const totalGrade = document.querySelector('.total')
const avgTotal = document.querySelector('.average')

let array = [];

btn.addEventListener('click', () => {
// for(let i = 0; i < array.length; i++){
    //     array[i] = grade.value
// }

    let total;
    let avg;
    
    if(grade.value !== ''){
        array.push(grade.value)

        const list = document.createElement('li');
        list.textContent = `[${grade.value}]`;
        output.appendChild(list);
    } else {
        total = array.reduce((acc, current) => {
            return Number(acc) + Number(current);
        }, 0)
        avg = total / array.length;

        totalGrade.textContent = `Total grade: ${total}`;
        avgTotal.textContent = `Average grade: ${avg}`
    }
   
    grade.value = ''
});
