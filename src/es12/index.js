//Replace all

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replaceString = string.replace("JavaScript","Python");

console.log(replaceString);

const replacedString2 = string.replaceAll("JavaScript","Python");

console.log(replacedString2);

//Métodos privados con #

class Message {
    #show(val){
        console.log(val);
    }
  
}

const message = new Message();

message.show('Hola');

//Promise Any 😊

const promise1 = new Promise((resolve, reject) => reject("1"));

const promise2 = new Promise((resolve, reject) => reject("2"));

const promise3 = new Promise((resolve, reject) => reject("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//Objeto Weak ref: evita que sea recolectado por el garbage collector

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }  
}

//Expresiones y operadores 

let isTrue = true;

let isFalse = false;

console.log( isTrue &&= isFalse);

let isTrue = true;

let isFalse = false;

console.log(isTrue ||= isFalse);

let isTrue = undefined;

let isFalse = false;

console.log(isTrue ??= isFalse);