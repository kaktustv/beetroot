function commoтDivisor() {

const nOne = +prompt('Введите первое число', 0);
const nTwo = +prompt('Введите второе число', 0);

for (let i = 2; i < Infinity;){
    if(nOne && nTwo % i === 0){
        alert(i);
        break;
    } else{
        i++;
    }
}
}
