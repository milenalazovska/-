let input = prompt("Enter your birth year");
console.log(input);
let birthYear =  parseInt(input);
console.log(typeof(birthYear));

let a = birthYear
let b = 4
let c = 12
let chinesYear = (a - b) % c;
console.log(`Chines year si ${chinesYear}`);

if(chinesYear ==0){
    console.log(`You are RAT in Chinese Zodica`);
}
else if(chinesYear ==1){
    console.log(`You are OX in Chinese Zodica`);
}

else if(chinesYear ==2){
    console.log(`You are TIGER in Chinese Zodica`);
}

else if(chinesYear ==3){
    console.log(`You are RABBIT in Chinese Zodica`);
}

else if(chinesYear ==4){
    console.log(`You are DRAGON in Chinese Zodica`);
}

else if(chinesYear ==5){
    console.log(`You are SNAKE in Chinese Zodica`);
}

else if(chinesYear ==6){
    console.log(`You are HORSE in Chinese Zodica`);
}

else if(chinesYear ==7){
    console.log(`You are GOAT in Chinese Zodica`);
}

else if(chinesYear ==8){
    console.log(`You are MONKEY in Chinese Zodica`);
}

else if(chinesYear ==9){
    console.log(`You are ROOSTER in Chinese Zodica`);
}

else if(chinesYear ==10){
    console.log(`You are DOG in Chinese Zodica`);
}

else if(chinesYear ==11){
    console.log(`You are PIG in Chinese Zodica`);
}

else{
    console.log(`year not valid`);
}