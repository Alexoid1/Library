document.getElementById('book').addEventListener('submit',addBook);

const books_container = document.querySelector('#books-container');

function addBook(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('read').value;

    let book = new Book(title,author,pages,status);
    
    create(book);

    addBookToLibrary(book);
}


let myLibrary = [];

function Book(title,author,pages,status) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.status=status
}

function create(book){
    let cont = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');
    let read_btn = document.createElement('button');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read_btn.setAttribute();

    books_container.appendChild(cont);
    cont.appendChild(title);
    cont.appendChild(author);
    cont.appendChild(pages);
    cont.appendChild(read);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}
