const booksContainer = document.querySelector('#books-container');

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.changeStatus = function changeStatus() {
  if (this.status === true) {
    this.status = false;
  } else {
    this.status = true;
  }
};

function create(book) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card', 'w-25');
  const cont = document.createElement('div');
  cont.classList.add('card-body');
  const title = document.createElement('h2');
  title.classList.add('card-title');
  const author = document.createElement('p');
  author.classList.add('card-subtitle');
  const pages = document.createElement('p');
  pages.classList.add('card-text');
  const read = document.createElement('p');
  const readBtn = document.createElement('button');
  readBtn.classList.add('btn', 'btn-primary');
  if (book.status) {
    readBtn.textContent = 'Not Read';
  } else {
    readBtn.textContent = 'Read';
  }

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;

  booksContainer.appendChild(cont);
  booksContainer.appendChild(cardContainer);
  cardContainer.appendChild(cont);
  cont.appendChild(title);
  cont.appendChild(author);
  cont.appendChild(pages);
  cont.appendChild(read);
  cont.appendChild(readBtn);

  readBtn.addEventListener('click', () => {
    book.changeStatus();
    if (book.status === true) {
      readBtn.textContent = 'Not Read';
    } else if (book.status === false) {
      readBtn.textContent = 'Read';
    }
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBook(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('read').checked;

  const book = new Book(title, author, pages, status);

  create(book, booksContainer);

  addBookToLibrary(book);

  document.getElementById('book').reset();
}

document.getElementById('book').addEventListener('submit', addBook);
