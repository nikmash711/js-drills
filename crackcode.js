function decode(message){
    let myArray = message.split(" ");
    let decodedString = ""; 

    for(let i =0; i<myArray.length; i++){
        if (myArray[i][0]==="a"){
            decodedString+=myArray[i][1];
        }
        else if (myArray[i][0]==="b"){
            decodedString+=myArray[i][2];
        }
        else if (myArray[i][0]==="c"){
            decodedString+=myArray[i][3];
        }
        else if (myArray[i][0]==="d"){
            decodedString+=myArray[i][4];
        }
        else {
            decodedString+= " ";
        }
    }
    return decodedString;
}

console.log(decode("craft block argon meter bells brown croon droop"));