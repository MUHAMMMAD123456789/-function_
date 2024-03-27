// function greetPerson(name) {
//     console.log(`Hello ${name}`);
// }


// greetPerson('Sevinch')
// greetPerson('Ali')




// function brack(a, b) {

//     let x = a / 100;
//     let y = b / x

//     return y;
// }

// let a = 1000;
// let b = 15;
// let result = brack(a, b);
// console.log(`${result}%`);






// function calculate(a, b, x) {
//      a = +prompt('Num_one')
//      x = +prompt('Sign') 
//      b = +prompt('Num_two')


//      if(x === "+"){
//         a + b
//      } else {
        
//      }


// }

// calculate()




// let user = {
//     name: "Alex",
//     age: 29,
//     isMarried: false
// }

// let user2 = {
//     name: "Jordan",
//     age: 15,
//     isMarried: false
// }


// function checkIfAdult(data) {
//     if (data.age >= 18){
//         console.log(`${data.name} is adult`);
//     }  else if (data.age >= 18) {
//         console.log(`${data.name} is not adult`);
//     } 
// }

// checkIfAdult(user)
// checkIfAdult(user2)








// function fibonaci(num) {
//     const result = [0, 1];

//     return result[num];
// }


// console.log(fibonaci(7));







const n = parseInt(prompt('Введите номер числа Фибоначчи: '));

let fib = [0, 1];


while (fib.length <= n) {

    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}

console.log(`Число Фибоначчи под номером ${n}: ${fib[n]}`);


