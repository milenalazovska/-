let myFirstHeader = document.getElementById("myTitle");
myFirstHeader.innerText = "My page is way cooler";

let myNewParagraph = myFirstHeader.nextElementSibling;
myNewParagraph.innerText = "Lets finish this exercise";

let paragraphTwo = document.getElementsByClassName("paragraph second");
console.log(paragraphTwo[0]);
paragraphTwo[0].innerText = "It's really easy"


let myNewText = paragraphTwo[0].nextElementSibling;
myNewText.innerText = "Lets change this text";


let myFirstDiv = document.getElementById("first");
console.log(myFirstDiv);
let mySecondDiv = myFirstDiv.nextElementSibling;
console.log(mySecondDiv);
let myThirdDiv = mySecondDiv.nextElementSibling;
console.log(myThirdDiv);

let mySecondHeader = myThirdDiv.firstElementChild;
mySecondHeader.innerText = "Lets change this header";

let myThirdHeader = mySecondHeader.nextElementSibling;
myThirdHeader.innerText = "Last change I made";