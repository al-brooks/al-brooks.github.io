let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/photo-1.jpeg') {
    myImage.setAttribute('src', 'images/city-view.jpg');
  } else if (mySrc === 'images/city-view.jpg') {
    myImage.setAttribute('src', 'images/after-rain.jpg');
  } else if (mySrc === 'images/after-rain.jpg') {
    myImage.setAttribute('src', 'images/photo-1.jpeg');
  } else {
    myImage.setAttribute('src', 'images/photo-1.jpeg');
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `What's up ${myName}? Welcome to my site.`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `What's up ${storedName}? Welcome to my site.`;
  // Below setting allows you to use line breaks
  // myHeading.setAttribute('style', 'white-space:pre;');
}

myButton.onclick = function () {
  setUserName();
};
