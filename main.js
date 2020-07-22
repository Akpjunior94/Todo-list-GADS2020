const myForm = document.querySelector('#my__form')
const bookTitle = document.querySelector('#title');
const author = document.querySelector('#autor');
const msg = document.querySelector('.msg');
const books = document.querySelector('#books');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(bookTitle.value === '' || author.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please Enter All Fields';

    setTimeout(() => {msg.remove();}, 3000);
  } else {
    books.classList.add('book__style')
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${bookTitle.value}: ${author.value}`));

    books.appendChild(li);

    // clear fields
    bookTitle.value = '';
    author.value = '';
  }
}