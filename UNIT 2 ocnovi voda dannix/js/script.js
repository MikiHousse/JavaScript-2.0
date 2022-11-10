// остановился на 14 задании

let r = 6;
let t = 'Hello';

// console.log(a);

let names = document.querySelector('.name'); // input
let secondName = document.querySelector('.second-name');
let year = document.querySelector('.year');
let major = document.querySelector('.major');
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');
// let inputIn = document.getElementsByClassName('.input-in').value = 'Hello';

// button.onclick = function () {
//     // кнопка будет нажата
//     console.log('Работает!!!!!!');
//     // console.log(inputIn.value); // value - то, что введено в input
//     let b = +inputIn.value; // + перевести в число!!!!!!!
//     console.log(b + 10); // '66'+10 = 6610
//     div.innerHTML = b;
//     inputIn.value = '';
// }

// button.onclick = () => (div.innerHTML = +inputIn.value + +inputInTwo.value)
button.onclick = function () {
    console.log('work');
    // inputIn.style.border = '2px solid red'

    let a = names.value;
    let b = secondName.value;
    let c = year.value;
    let d = major.value;

    // console.log(st * Math.PI);
    // let a = +inputInTwo.value;
    // console.log(a + b)
    div.innerHTML = `Уважаемый ${a}, ${b} ваш возраст ${c} род занятий ${d}`;
    // inputIn.value = 'hello';
    // inputIn.setAttribute('value', inputIn.value);
    // console.log(inputIn.value)
    names.value = '';
    secondName.value = '';
    year.value = '';
    major.value = '';

}




// 1 задача

let a = 7;
let b = 9;

console.log(a * b);

// 2 задача

let c = 7;
let d = 9;

console.log(c / d);

// 3 задача 

let e = 3;
let f = 5;

console.log(e + f);

// 4 задача

let e1 = '3'; // javascrip преобразовал число в строку 
let f1 = 5;

console.log(e1 + f1);

// 5 задача

let e2 = 3;
let f2 = 0;

console.log(e2 / f2); // бесконечность 

// 6 задача

let e3 = 3;
let f3 = 'Hello'; 

console.log(e3 + f3); // когда в выражение есть строка то другая переменная становиться тоже строкой

// 7 задача

let e4 = 3;
let f4 = 'Hello';

console.log(e4 * f4); // нельзя умножать строку на число

// 8 задача

