let book_id = 0;
let myLibrary = [];
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

const addBookForm = document.querySelector("#add-book");
addBookForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const id = book_id;
    book_id += 1;

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    

    const newBook = new Book(id, title, author, pages, read);

    addBookToLibrary(newBook);
    dialog.close()
})


function Book(id, title, author, pages, read) {
    this.id = id;
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
    book.read == "true" ? bookCard.classList.add('read') : bookCard.classList.add('unread');

    bookCard.dataset.title = book.title;

    const btnRemoveCard = document.createElement("button");
    btnRemoveCard.id = "btn-remove-card";
    btnRemoveCard.innerHTML = "x";

    btnRemoveCard.addEventListener('click', (e) => {
        const card = e.target.parentNode;
        const title = {...card.dataset}['title'];
        removeBookFromLibrary(title);
        card.remove();
    })

    const cardTitle = document.createElement("h2");
    cardTitle.innerText = book.title;

    const cardAuthor = document.createElement("h3");
    cardAuthor.innerText = book.author;

    const cardPages = document.createElement("p");
    cardPages.innerText = `${book.pages} pages`;

    const cardToggleRead = document.createElement("button");
    cardToggleRead.innerText = "mark as unread";
    cardToggleRead.id = "btn-mark-read";

    cardToggleRead.addEventListener('click', (e) => {
        const button = e.target;
        const card = button.parentNode;
        const classes = [...card.classList];
        // switch to unread
        if (classes.includes("read")) {
            card.classList.replace("read", "unread")
            button.innerText = "mark as read";
        }
        // switch to read
        else {
            card.classList.replace("unread", "read")
            button.innerText = "mark as unread"
        }
    });

    bookCard.appendChild(btnRemoveCard);
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPages);
    bookCard.appendChild(cardToggleRead);
    booksGrid.appendChild(bookCard);
}   

function removeBookFromLibrary(title) {
    // Remove from array
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == title) {
            myLibrary = removeItemFromArray(myLibrary, i)
        }
    }
}

function removeItemFromArray(arr, index) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i != index) {
            newArray.push(arr[i])
        }
    }
    return newArray
  }


function markAsRead(element) {
    console.log(element.classList)
}