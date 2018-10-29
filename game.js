function game(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num ===randomNo){
        return "Tie!";
    }
    else if (num===1 && randomNo===3){
        return "You win! Rock beats scissors!";
    }
    else if (num===3 && randomNo===2){
        return "You win! Scissors beats paper";
    }
    else if (num===2 && randomNo===1){
        return "You win! Paper beats rock"
    }
    else if (randomNo===1 && num===3){
        return "Computer wins! Rock beats scissors!";
    }
    else if (randomNo===3 && num===2){
        return "Computer wins! Scissors beats paper";
    }
    else if (randomNo===2 && num===1){
        return "Computer wins! Paper beats rock"
    }
    else{
        throw new Error("Please put a number between 1-3!");
    }
}
try{
    console.log(game(3));
}
catch(e){
    console.error(e.message);
}