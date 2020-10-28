
// EVENTS
const booksContainer = document.querySelector('#books-container');
document.getElementById('book').addEventListener('submit',  addBookToLibrary);




// CONSTRUCTOR
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function changeStatus(myLibrary,index) {
  console.log(myLibrary[index])
  if (myLibrary[index].status === true) {
     myLibrary[index].status = false;
     
     localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
  } else {
    myLibrary[index].status = true;
    localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
  }
  create(myLibrary)
};

// lOGIC
function buttonValue(status,button){
     
    if (status === true) {
        button.textContent='Not Read'
    } else if (status === false) {
        button.textContent='Read'
    }   
}

function deleteBook(index,myLibrary){
    myLibrary.splice(index,1)
    localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
    create(myLibrary)
    
}



// DOM manipulation
function createStorage(book){
  if(localStorage.getItem("myLibrary")===null){
    let myLibrary=[];
    myLibrary.unshift(book);
    
    localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
  }else{
      let myLibrary=JSON.parse(localStorage.getItem("myLibrary")); 
      myLibrary.unshift(book);
      localStorage.setItem("myLibrary",JSON.stringify(myLibrary));
  }

  document.getElementById('book').reset();
}


function create(myLibrary) {
    booksContainer.innerHTML='';
    
    for(let i=0;i<myLibrary.length;i++){
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
        buttonValue(myLibrary[i].status,readBtn)
        const deleteBtn = document.createElement('button');
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
            let mat = JSON.parse(localStorage.getItem("myLibrary"))
            changeStatus(mat,i);
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
  
  createStorage(book)
  
  create(JSON.parse(localStorage.getItem("myLibrary")));

  
}


