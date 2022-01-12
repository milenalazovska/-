let myNumberArray = [4, 2, 6, 9, 3];
let myNewList = document.getElementById("myList");

for (let numbers of myNumberArray) {
    myNewList.innerHTML += `<li>${numbers}</li>`;
}

sumOfNumbers(myNumberArray);
function sumOfNumbers(numbers) {
    let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
    console.log(`${sum}`)
}

let myNewParagraph = document.getElementById("myParagraph");
myNewParagraph.innerHTML = "4+2+6+9+3=24"