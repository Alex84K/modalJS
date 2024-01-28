const library = [];
//isbn;title;author;year
let inputData = confirm('Want to add a book to our library? ";"');//Changed it here prompt -> confirm
while (inputData) {
    //TODO create and add to library only unique book by isbn

    let newBook = initObj();
    if(library.length === 0) {
        library.push(newBook);
    } else {
        if(findBook(library, newBook.isbn) === -1) {
            library.push(newBook);
        } else{
            alert('No! There is already such a book!!!');
        }
    }
    
    
    inputData = confirm('Enter book data separate by ";"');//Changed it here prompt -> confirm
    printLibrary(library);
    if(!inputData) {
        break;
    }
}

//printLibrary(library);
console.log(printLibrary(library));

function printLibrary(library) {
    //TODO print all books to console

    for(let i = 0; i < library.length; i++) {
        library[i].toString;
    }
}

function findBook(library, isbn) {
    let is = isbn;
    //TODO return index if book exists, otherwise return -1
    for(let i = 0; i < library.length; i++) {
            if (library[i].isbn === is) {
                //console.log[i];
                return i;
            } else {
                //console.log(-1);
                return -1;
            }
    }
}

function Book(isbn, title, author, year) {
    this.isbn = +isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISB: ${this.isbn}, ${this.title}, ${this.author}, ${this.year}`; // TODO Complete toString
    }
}

function initObj() {
    let isb = prompt('ISBN');
    let author = prompt('BookName');
    let bookName = prompt('Author');
    let year = prompt('Year');

    const book = new Book(isb, author, bookName, year);
    return book;
}