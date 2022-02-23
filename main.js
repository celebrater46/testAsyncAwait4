"use strict";

const asyncReturnSomething = (msg) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(msg);
        }, 3000);
    });
}

const sayHello = async() => {
    return await asyncReturnSomething(`Hello! I'm ${this.name}!`)
}

const doAsync = async ()=> {
    const greeting = await new sayHello();
    console.log(greeting);
    console.log('Done!');
};