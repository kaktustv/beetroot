function divisor() {

const number = +prompt('Введите число', 0);
const devisors = [];

for (let i = 2; i <= number; i++){
    if (number % i === 1){devisors.push(i);};
}

alert(devisors);
}
