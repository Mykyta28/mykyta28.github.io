const total = document.querySelector('.total'); 
const avg = document.querySelector('.average');

let totalRes = 0;
let avgRes = 0
let grade;
let i = 0;

do { 
    grade = prompt('Enter student grade:');
    totalRes += Number(grade)
    i++;
    avgRes = totalRes / (i - 1);
    if(!grade){
        break;
    }
}while(grade !== '' || true);

total.textContent = `Total grade: ${totalRes}`
avg.textContent = `Average grade: ${avgRes.toFixed(2)}`