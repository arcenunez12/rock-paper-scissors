function getComputerChoice() {
    // Use Math.random() to get a random number b/t 0 and 2
    let randomNum = Math.random() * 3;
    randomNum = Math.ceil(randomNum);
    console.log(randomNum);
}
getComputerChoice();
console.log("Hello World!");
