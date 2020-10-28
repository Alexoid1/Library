/* eslint-disable import/extensions, no-use-before-define, import/first, import/no-cycle */

import {
  Book, changeStatus, buttonValue, deleteBook, booksContainer,
} from './app.js';

export { create, addBookToLibrary };

// DOM manipulation

function createStorage(book) {
  if (localStorage.getItem('myLibrary') === null) {
    const myLibrary = [];
    myLibrary.unshift(book);

    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  } else {
    const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary.unshift(book);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }

  document.getElementById('book').reset();
}

function create(myLibrary) {
  booksContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
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
    buttonValue(myLibrary[i].status, readBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-2');
    deleteBtn.textContent = 'Delete';

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;

    booksContainer.appendChild(cont);
    booksContainer.appendChild(cardContainer);
    cardContainer.appendChild(cont);
    cont.appendChild(title);
    cont.appendChild(author);
    cont.appendChild(pages);
    cont.appendChild(read);
    cont.appendChild(readBtn);
    cont.appendChild(deleteBtn);

    readBtn.addEventListener('click', () => {
      const mat = JSON.parse(localStorage.getItem('myLibrary'));
      changeStatus(mat, i);
      buttonValue(myLibrary[i].status, readBtn);
    });
    deleteBtn.addEventListener('click', () => {
      deleteBook(i, myLibrary);
    });
  }
}


function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('read').checked;

  const book = new Book(title, author, pages, status);

  createStorage(book);

  create(JSON.parse(localStorage.getItem('myLibrary')));
}
