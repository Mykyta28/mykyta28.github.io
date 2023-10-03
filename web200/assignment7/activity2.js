const btn = document.querySelector('.btn');
const firstValue = document.querySelector('.first');
const secondValue = document.querySelector('.second');
const table = document.querySelector('.table');

btn.addEventListener('click', () => {
    const rows = parseInt(firstValue.value);
    const cols = parseInt(secondValue.value);

    if (!isNaN(rows) && !isNaN(cols)) {
        // Clear previous table content
        table.innerHTML = '';
        table.style = "border: 1px solid black"

        // Create the header row (column labels)
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.style = "padding: 15px"
        tr.appendChild(th);

        for (let col = 1; col <= cols; col++) {
            const th = document.createElement('th');
            th.textContent = col;
            tr.appendChild(th);
        }
        table.appendChild(tr);

        // Generate the multiplication table
        for (let row = 1; row <= rows; row++) {
            const tr = document.createElement('tr');

            // Create the row header cell (row label)
            const th = document.createElement('th');
            th.textContent = row;
            tr.appendChild(th);

            for (let col = 1; col <= cols; col++) {
                const td = document.createElement('td');
                td.style = "padding: 15px; border: 1px solid black";
                td.textContent = row * col;
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
    } else {
        alert('Please enter valid numbers for both rows and columns.');
    }
});
