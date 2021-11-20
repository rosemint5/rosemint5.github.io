let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lesbian_frog.png') {
      myImage.setAttribute('src','images/straight_frog.png');
      alert("NO!! I told you to do not touch her!")
    } else {
      myImage.setAttribute('src','images/lesbian_frog.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = "Don't touch my frog, " + myName;
    }
  }


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "Don't touch my frog, " + storedName;
}
myButton.onclick = function() {
  setUserName();
}







/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}*/

/*function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}*/
/*alert(multiply(4, 7));
alert(multiply(20, 20));
alert(multiply(0.5, 3));*/

/*document.querySelector('img').onclick = function() {
  alert("Ouch! I said don't touch her!!");
}*/