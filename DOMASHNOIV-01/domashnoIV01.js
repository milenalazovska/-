function tellStory(name, mood, activity){
    return `This is ${name} she is ${mood} when she is ${activity}`;
}

let arrayStory = ['Anja', 'happy', 'dancing'];
console.log(tellStory(arrayStory[0],arrayStory[1],arrayStory[2]));