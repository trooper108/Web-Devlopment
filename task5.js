let books = [
    {
        title : "The design EveryDay things",
        author : "Don Norman",
        alreadyRead : false,
    },
    {
        title : "The Most Human Human",
        author : "Brian Christian",
        alreadyRead : true,
    }
];
console.log(books);

let div = document.querySelector(".container");
let i = 0;
div.addEventListener("click",()=>{
    let book = document.createElement("ul");
    let title = document.createElement("li");
    let author = document.createElement("li");
    let read = document.createElement("li");
    title.textContent = books[i].title;
    author.textContent = books[i].author;
    read.textContent = books[i].alreadyRead;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(read);
    div.appendChild(book);
    i++;
})


books.forEach(function(element){
    let book = document.createElement("ul");
    let title = document.createElement("li");
    let author = document.createElement("li");
    let read = document.createElement("li");
    title.textContent = element.title;
    author.textContent = element.author;
    read.textContent = element.alreadyRead;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(read);
    div.appendChild(book);
})