let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.png') {
      myImage.setAttribute ('src','images/download2.png');
    } else {
      myImage.setAttribute ('src','images/download.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Data Analytics for' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Data Analytics for ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}