const bookList = document.querySelector('#book-list- ul');
console.log(bookList);

bookList.addEventListener('click', (e) => {
    console.log(e)
       let className = e.target.className;
       if(Object.is(className, "delete")) {
        let li = e.target.parentElement;
        bookList.removeChild(li);
    }
})