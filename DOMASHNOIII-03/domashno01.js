let input = prompt(`Enter your cash amount`);
console.log(input);
let amount = parseInt(input);
console.log(typeof(amount));
ATM(amount);

function ATM(money){
    let myMoney = 500
    money = amount
    let moneyleft = myMoney - money
 
     if(money > myMoney){
        console.log(`Not enough money`);
    }
     else if (money == myMoney){
         console.log(`there you got your ${myMoney}$`)
     }
     else if (money < myMoney){
         console.log(`you have ${moneyleft}$ left on your bank account`)
     }
}

