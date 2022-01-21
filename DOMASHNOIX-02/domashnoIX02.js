//Create two inputs, one for text and one for color
//Create a button that says: generate h1
//Create an h3 element for messages
//When the button is clicked create a new header below the inputs and button
//The new header should have the text and color from the inputs
//If the person enters an invalid color or an empty text show an error message to the message element


let button = $("#button");

button.on("click", function () {
    let text = $("#text").first().val();
    let color = $("#color").first().val();
    let firstHeader = $("#firstHeader");
    firstHeader.text(`${text}`);
    firstHeader.css("color",`${color}`)
})

