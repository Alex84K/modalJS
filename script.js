const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    //TODO create and add to library only unique book by isbn
    console.log(inputData);
    const splArr = inputData.split(';');
    console.log(splArr);

    let newBook = new Book(splArr[0], splArr[1], splArr[2], splArr[3]);

    if(library.length === 0) {
        library.push(newBook);
    } else {
        if(findBook(library, newBook.isbn) === -1) {
            library.push(newBook);
        } else{
            alert('No! There is already such a book!!!');
        }
    }


    inputData = prompt('Enter book data separate by ";"');
    if(!inputData) {
        break;
    }
    console.log(library);
}

printLibrary(library);

function printLibrary(library) {
    //TODO print all books to console
    for(let i = 0; i < library.length; i++) {
        library[i].toString;
    }
}

function findBook(library, isbn) {
    //TODO return index if book exists, otherwise return -1
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
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISB: ${this.isbn}, ${this.title}, ${this.author}, ${this.year}`; // TODO Complete toString
    }
}
