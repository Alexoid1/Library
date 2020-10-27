document.getElementById('book').addEventListener('submit',addBook)
function addBook(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('read').value

    let book=new Book(title,author,pages,status)
    
    create(book)
}


let myLibrary = [];

function Book(title,author,pages,status) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.status=status
}
function create(book){
    let cont=document.createElement('div');
    let paragraph=document.createElement('p').textContent=book.title

    

    
}



function addBookToLibrary() {
    
}

addBook()