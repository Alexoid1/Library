/* eslint-disable import/extensions, no-use-before-define, import/first, import/no-cycle */

export {
  Book, changeStatus, buttonValue, deleteBook, booksContainer,
};

import { create, addBookToLibrary } from './dom.js';

// EVENTS
const booksContainer = document.querySelector('#books-container');
document.getElementById('book').addEventListener('submit', addBookToLibrary);

// CONSTRUCTOR
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function changeStatus(myLibrary, index) {
  if (myLibrary[index].status === true) {
    myLibrary[index].status = false;

    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  } else {
    myLibrary[index].status = true;
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }
  create(myLibrary);
}

// lOGIC
function buttonValue(status, button) {
  if (status === true) {
    button.textContent = 'Not Read';
  } else if (status === false) {
    button.textContent = 'Read';
  }
}

function deleteBook(index, myLibrary) {
  myLibrary.splice(index, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  create(myLibrary);
}
