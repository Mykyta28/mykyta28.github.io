const form = document.querySelector('form');

let bookList = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookName = document.querySelector('.name').value;
    const bookAuthor = document.querySelector('.author').value;
    const bookDate = document.querySelector('.date').value
    const bookEdition = document.querySelector('.edition').value;
    const bookCity = document.querySelector('.city').value;
    const bookState = document.querySelector('.state').value;

    const bookObject = {
        nameOfBook: bookName,
        author: bookAuthor,
        date: bookDate,
        edition: bookEdition,
        city: bookCity,
        state: bookState
    }

    bookList.push(bookObject);

    const ul = document.createElement('ul')
    const list = document.createElement('li');
    list.innerHTML = '';
    ul.style = "border: 1px solid black; margin-top: 30px; "

    bookList.forEach(book => {
        list.style = "list-style-type: none; padding: 10px"
        list.innerHTML = `Book Name: ${book.nameOfBook}<br>Author: ${book.author}<br>Date: ${book.date}<br>Edition: ${book.edition}<br>City: ${book.city}<br>State: ${book.state}`;
        ul.appendChild(list)
    })

    form.appendChild(ul);

    form.reset();
    
});

