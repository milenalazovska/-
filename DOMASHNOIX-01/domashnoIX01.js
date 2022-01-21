//Create an input
//Create a button
//When clicked the button should print a greet message in an h1 header
//Ex: input: Petko output message: Hello there Petko!

let button = $("#btn");
let header = $("#header")


button.on("click", function () {
    let input = $("#input").first().val();
    //console.log(input); 

    function show() {
        header.text(`${input}`);
    }
    show(input);
})



