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

//Concatenación de variables
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//Varias líneas de String

//anterior

let lorem = "Esta es una frase épica, anteriormente se escribía \n"
+ "de esta manera."
//es6
let lorem2 = `otra frase épica que necesitamos 
esta es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

//destructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
//anterior
console.log(person.name, person.age);

//es6
let { name,age,country } = person;
console.log(name,age,country);

//operador de propagación 

let team1 = ['Oscar','Julian','Ricardo'];

let team2 = ['Valeria','Yessica','Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//diferencia entre var y let

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let'
}


console.log(globalVar); // resultará un error porque se sale de su scope
console.log(globalLet);

//constantes

const a = 'b';

a = 'a'; // resultará un error

console.log(a);



