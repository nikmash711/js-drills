function getYearOfBirth(age){
        return 2018-age;
}

function createGreeting(name, age){
    if (age<=0){
        throw new Error("Age can't be negative!");
    }
    else if (name===undefined || age ===undefined){
        throw new Error("Arguments not given!");
    }
    else if (typeof age!=="number"){
        throw new TypeError("Age must be a number!"); 
    }
    else if (typeof name!=="string"){
        throw new TypeError("Name must be a string!"); 
    }
    else{
        const yearOfBirth = getYearOfBirth(age);
        return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
    }
}

try{
    console.log(createGreeting("Nikkie", "23"));
}
catch(e){
    console.error(e.message);
}