const teste1 = new Promise((resolve, reject) => {
    const x = 4;
    if (x == '4') {
        resolve(x);
    } else {
        reject(x);
    }
});

const teste2 = new Promise((resolve, reject) => {
    const x = 8;
    if (x === 8) {
        resolve(x);
    } else {
        reject(x);
    }
});

//Realizar a chamada de varias promise de forma simultaneas, ele so vai retornar quando todas tiverem sido executadas. 
const llpromise = Promise.all([teste1, teste2]).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});