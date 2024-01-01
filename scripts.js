const myLibrary = [];
const booksGrid = document.querySelector(".books-grid");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("button");
const closeButton = document.querySelector("#btn-exit-dialog");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

closeButton.addEventListener

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

    const cardTitle = document.createElement("h2");
    cardTitle.innerText = book.title;

    const cardAuthor = document.createElement("h3");
    cardAuthor.innerText = book.author;

    const cardPages = document.createElement("p");
    cardPages.innerText = book.pages;

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPages);
    
    booksGrid.appendChild(bookCard);
}   

