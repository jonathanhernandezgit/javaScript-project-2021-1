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

//asignación de objetos es6

let name = 'Jonathan';
let age = 30;

obj = { name,age };

console.log( obj );

// arrow function es6

const names = [
    { name: 'Jonathan', age: 32 },
    { name: 'Yessica', age: 27 }
] 

let sitOfNames = names.map(item => console.log(item.name));

const listOfNames3 = ( name, age, country ) => {
    //code
}

const listOfNames4 = name => {
    //code
}

const square = num => num * num;

//Promesas (asincronismo) JavaScript no es un lenguaje asincrónico

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    });
}


helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


//Classes es6

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator ();

console.log(calc.sum(2,2));

//module es6

import { hello } from './module';

hello();


function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



