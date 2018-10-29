function getYearOfBirth(age){
    if (age<=0){
        throw new Error("Age can't be negative!");
    }
    else{
        return 2018-age;
    }
}

function createGreeting(name, age){
    if (name===undefined || age ===undefined){
        throw new Error("Arguments not valid!");
    }
    else{
        const yearOfBirth = getYearOfBirth(age);
        return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
    }
}

try{
    console.log(createGreeting("Nikkie"));
}
catch(e){
    console.log(e);
}