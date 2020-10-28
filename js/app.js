// EVENTS
const booksContainer = document.querySelector('#books-container');
document.getElementById('book').addEventListener('submit',  addBookToLibrary);


const myLibrary = [];

// CONSTRUCTOR
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

//lOGIC
function buttonValue(status,button){
     
    if (status === true) {
        button.textContent='Not Read'
    } else if (status === false) {
        button.textContent='Read'
    }   
}

function deleteBook(index,array){
    array.splice(index,1)
    create(myLibrary)
}

// DOM manipulation
function create(myLibrary) {
    booksContainer.innerHTML='';
    
    for(let i=0;i<myLibrary.length;i++){
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card', 'w-25');
        let cont = document.createElement('div');
        cont.classList.add('card-body');
        let title = document.createElement('h2');
        title.classList.add('card-title');
        let author = document.createElement('p');
        author.classList.add('card-subtitle');
        let pages = document.createElement('p');
        pages.classList.add('card-text');
        let read = document.createElement('p');
        let readBtn = document.createElement('button');
        readBtn.classList.add('btn', 'btn-primary');
        buttonValue(myLibrary[i].status,readBtn)
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger','ml-2');
        deleteBtn.textContent='Delete'

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
            myLibrary[i].changeStatus();
            buttonValue(myLibrary[i].status,readBtn)
        });
        deleteBtn.addEventListener('click', () => {
            
            deleteBook(i,myLibrary)
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

  myLibrary.unshift(book);
  create(myLibrary);

  document.getElementById('book').reset();
}


