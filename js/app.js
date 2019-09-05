document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');



  const handleFormSubmit = function (event) {
    event.preventDefault();

    const bookTitle = event.target.title.value
    const authorName = event.target.author.value
    const categorySelected = event.target.category.value
    console.log(bookTitle);
    console.log(authorName);
    console.log(categorySelected);
    
    const readingListDiv = document.querySelector('#reading-list')
    const newParagraphItem = document.createElement('p')
    readingListDiv.appendChild(newParagraphItem)

    newParagraphItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`

    document.querySelector('#new-item-form').reset();
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

// const unorderedList = document.querySelector('ul')
// const newListItem = document.createElement('li')
// newListItem.textContent = "Purple"
// newListItem.classList.add('purple', "bold")
// unorderedList.appendChild(newListItem)


// newListItem.textContent = "Purple"
// newListItem.classList.add('purple', "bold")


// 1. Title - text input
// 2. Author - text input
// 3. Category(e.g.book, article, blog post) - select