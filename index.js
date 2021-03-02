const yourName = ["Alfredo", "Carlos", "Daniel", "Zolaf", "Gnabry", "Roberth"];
const yourAge = ["22", "45", "55", "19", "24", "21"];
const phrase = ["The way to get started is to quit talking and begin doing.", "If life were predictable it would cease to be life, and be without flavor.", "Life is what happens when you're busy making other plans.", "When you reach the end of your rope, tie a knot in it and hang on", "Always remember that you are absolutely unique. Just like everyone else."];

const randIndex = (array) => {
    let num = Math.floor(Math.random() * array.length)
    return num;
};

console.log(`Hey there, you must be ${yourName[randIndex(yourName)]}, naah I am just joking around`);
console.log(`But what I know for sure is that you are ${yourAge[randIndex(yourAge)]} years old!`);
console.log(`Now listen, ${phrase[randIndex(phrase)]}`);