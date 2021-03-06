//operador de reposo

const obj = {
    name:'jonathan',
    age: 30,
    country: 'GT'
};

// let { name, ...all } = obj;
// console.log(name,all);

let { country, ...all } = obj;
console.log(all);

//propiedades de propagación: unir elementos de objetos a un nuevo objeto


const obj = {
    name:'jonathan',
    age: 30,
};

const obj1 = {
    ...obj,
    country: 'GT'
};


// cúando ha terminado el llamado de una promesa

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello Word'),3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))


//RegExp

const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regExpDate.exec('2021-11-30');

const year = match[1];
const month = match[2];
const day = match[3]

console.log(year, month, day);

