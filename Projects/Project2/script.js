let min = 3;
let max = 10;
let target = Math.random() * (max - min + 1);
target = Math.floor(target) + min;

let guess = 0;

while (guess != target) {
    guess = prompt("Enter a guess " + guess);
    if (guess < target) {
        console.log(alert("Your guess is too low. Try again"))
    } else if (guess > target) {
        console.log(alert("Your guess is too high. Try again"));
    } else {
        console.log(alert("You got it"))
    }
}