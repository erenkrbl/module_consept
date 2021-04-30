export default class Student{
    constructor(name, id) {
        this.name =name;
        this.id = id;
        this.sayİnformation();
    }
    sayİnformation (){
        console.log(`I am ${this.name} and my id is ${this.id}`);
    }
}

const PI = 3.14;

export function numbersAdd(num1, num2) {
    console.log(num1 + num2)
}
export function numbersMultiply(num1, num2) {
    console.log(num1 * num2)
}
export function numbersDivision(num1, num2) {
    console.log(num1 / num2)
}

function sayHello(names) {
    console.log(`Wellcome ${names}`);
}


// export { numbersAdd, numbersDivision, sayHello}