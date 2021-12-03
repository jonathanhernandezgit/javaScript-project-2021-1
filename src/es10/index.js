//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//FlatMap

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//Trim Start

let hello = '      hello world';

console.log(hello);
console.log(hello.trimStart());

//Trim End

let hello = 'hello world     ';

console.log(hello);
console.log(hello.trimEnd());

//Try Catch: Nótese que no es necesario capturar el error si es que ocurre

try {

} catch {
    error
}

//From Entries

let entries = [["name", "oscar"], ["age" , 32]];

console.log(Object.fromEntries(entries));

//Objeto de tipo símbolo

let mySymbl = `My Symbol`;

let symbol = Symbol(mySymbl);

console.log(symbol.description);