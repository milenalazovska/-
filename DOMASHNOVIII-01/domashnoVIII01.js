//HOMEWORK PART 1
//CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
//name
//kind
//speak (method)
//this method will take one parameter and will print in the console a message: 
//e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
//Bonus: enter the values from prompt or from HTML inputs


let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let inputName = document.getElementById("name").value;
    let inputKind = document.getElementById("kind").value;
    let inputSays = document.getElementById("says").value;

    function Speak(inputName, inputKind) {
        this.name = inputName;
        this.kind = inputKind;
        this.speak = function (says) {
            let dogSpeak = says;
            console.log(`Dog says:${dogSpeak}`);
        }
    }


    let animal01 = new Speak(inputName, inputKind);
    animal01.speak(inputSays);
})



