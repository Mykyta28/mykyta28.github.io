class Book {
    constructor(title, author, date, edition, city, state) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.edition = edition;
        this.city = city;
        this.state = state;
    }

    APA() {
        return `${this.author} (${this.date}). ${this.title}. ${this.city}, ${this.state}: ${this.edition}.`;
    }
}

function generateBibliography(e) {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const date = document.querySelector('.date').value;
    const edition = document.querySelector('.edition').value;
    const city = document.querySelector('.city').value;
    const state = document.querySelector('.state').value;

    const book = new Book(title, author, date, edition, city, state);

    const output = document.querySelector('.output');
    const apaFormat = book.APA();
    
    const p = document.createElement('p');
    p.textContent = apaFormat;

    output.innerHTML = ''; // Clear previous entries
    output.appendChild(p);
}