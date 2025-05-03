// Get references to the elements
const textElement = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');
const toggleColorButton = document.getElementById('toggleColorButton');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');

// Change text content when the button is clicked
changeTextButton.addEventListener('click', () => {
  textElement.textContent = "The text has been changed!";
});

// Toggle background color when the button is clicked
toggleColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});

// Add a new element to the page when the button is clicked
addElementButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = "A new paragraph element has been added!";
  document.getElementById('content').appendChild(newElement);
});

// Remove the last element when the button is clicked
removeElementButton.addEventListener('click', () => {
  const content = document.getElementById('content');
  if (content.children.length > 4) {  // Ensure we don't remove the buttons
    content.removeChild(content.lastElementChild);
  }
});
