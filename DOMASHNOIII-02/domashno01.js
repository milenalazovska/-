let input = prompt("Enter your dogs age");
console.log(input);
let humanAge =  parseInt(input);
console.log(typeof(humanAge));
countDogYears(humanAge);

function countDogYears(years){
    let a = 7
    let dogYears = years * a
    console.log(`${dogYears} in dog years`)
}

