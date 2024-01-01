const myLibrary = [];
const booksGrid = document.querySelector(".books-grid");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.read?"have read":"not read yet"}.`
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const bookCard = document.createElement("div");
    bookCard.classList.add("card"); 
    bookCard.innerText = book.info();
    
    booksGrid.appendChild(bookCard);
}   