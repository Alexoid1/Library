document.getElementById('book').addEventListener('submit',addBook);


const books_container = document.querySelector('#books-container');

function addBook(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('read').checked;
    
    console.log(status)
    let book = new Book(title,author,pages,status);
    
    create(book,books_container);

    addBookToLibrary(book);
}




let myLibrary = [];

function Book(title,author,pages,status) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.status=status,
    this.changeStatus=function(){
        if(this.status===true){
            this.status=false
            
        }else{
            this.status=true
            
        }
    }
}

function create(book){
    let cont = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');
    let read_btn = document.createElement('button');
    read_btn.textContent='Not Read'
    

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    

    books_container.appendChild(cont);
    cont.appendChild(title);
    cont.appendChild(author);
    cont.appendChild(pages);
    cont.appendChild(read);
    cont.appendChild(read_btn)
    read_btn.addEventListener('click',function(e){
       book.changeStatus()
       console.log(book.status)
       if(book.status===true){
            read_btn.textContent='Not Read'
           
       }else if(book.status===false) {
            read_btn.textContent='Read'
       }
        
    
    })
   
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}
