function getYearOfBirth(age){
    return 2018-age;
}

function createGreeting(name, age){
    const yearOfBirth = getYearOfBirth(age);
    return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

console.log(createGreeting("Nikkie",23));