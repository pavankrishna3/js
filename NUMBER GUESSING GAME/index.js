
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1)+min);

console.log(answer)


let guessing = true;
let attempts = 0;

document.getElementById("submit").onclick = function checkNumber(){
    const guess=document.getElementById("guess").value;
    console.log(guess);

    if(guess.isNaN){
        alert('Please enter a number');
    }
    else if(guess<min || guess>max){
        alert(`Enter a number between ${min} and ${max}`);
    
    }
    else{
        attempts++

        if(guess>answer){
            window.alert("lower");

        }
        else if(guess<answer){
            window.alert("higher");

        }
        else{
            window.alert(`Congratulations! You've guessed the correct number in ${attempts} attempts`);
        }
    }
}

