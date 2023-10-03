const dateInp = document.querySelector('.date');
const output = document.querySelector('.output');

dateInp.addEventListener('change', () => {
    const selectedDate = new Date(dateInp.value);
    const selectedMonth = selectedDate.getMonth() + 1;
    const selectedDay = selectedDate.getDay();
    const selectedYear = selectedDate.getFullYear();
    output.innerHTML = `Month: ${selectedMonth}<br>Day: ${selectedDay}<br>Year: ${selectedYear}`
})