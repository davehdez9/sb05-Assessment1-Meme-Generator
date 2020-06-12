//form that accept a link to an image
// Text  for the top of the meme
//text for the bottom of the meme

//When the user submit the form, append to the DOM a div which contains the meme, including the image and its text.

//-----Requirements
// - User should be able to submit a form on the page to generate a new meme on the page,
// -  User should be able to add multiple memes to the pages by submitting the form multiples times
// - User should be able to click on button to remove a meme from the page
// When the meme form is submitted, values in the form inputs should be cleared

//Selectors
const memeGenerator = document.querySelector('.meme-generator');
const imgInput = document.querySelector('#img');
const topInput = document.querySelector('#top');
const bottomInput = document.querySelector('#bottom');
const submitBottom = document.querySelector('#submit');

submitBottom.addEventListener('click', function (e) {
  e.preventDefault();

  //Create div fot the meme
  const memeContainer = document.createElement('div');
  memeContainer.classList.add('meme-container');
  memeGenerator.appendChild(memeContainer);

  //Create Img
  const imgMeme = document.createElement('img');
  imgMeme.classList.add('img-meme');
  imgMeme.setAttribute('src', imgInput.value);
  memeContainer.appendChild(imgMeme);

  //Create Top Text
  const topText = document.createElement('p');
  topText.classList.add('top-text');
  topText.innerText = topInput.value;
  memeContainer.appendChild(topText);

  // Create Bottom text
  const bottomText = document.createElement('p');
  bottomText.classList.add('bottom-text');
  bottomText.innerText = bottomInput.value;
  memeContainer.appendChild(bottomText);

  //Delete Buttom
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.tagName = 'button';
  memeContainer.appendChild(deleteButton);

  //remove inputs after submit
  imgInput.value = '';
  topInput.value = '';
  bottomInput.value = '';
});

memeGenerator.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
