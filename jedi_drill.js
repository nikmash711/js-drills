function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

const result = jediName("Barrett", "Carpenter");
console.log(result);

