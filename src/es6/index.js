function newFunction (name, age, country){
    var nave = name || 'oscar';
    var age = age || 32;
    console.log(name,age);
}


// es6

function newFunction2(name = 'oscar', age = "32", country = "MX"){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo','23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
