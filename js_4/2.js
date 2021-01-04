let check = [{
        name: "Broad",
        amount: 2,
        price: 13.90,
    },
    {
        name: "Meet",
        amount: 1,
        price: 67.30,
    },
    {
        name: "Egg",
        amount: 10,
        price: 2.99,
    },
    {
        name: "Milk",
        amount: 1,
        price: 22.10,
    },
    {
        name: "Coffe",
        amount: 1,
        price: 133.50,
    },
]

const sumCheck = () => {

    let showCheck = check;
    let sum = 0;

    showCheck.forEach((item, index, array) => {
        sum += +(showCheck[index].amount * showCheck[index].price).toFixed(2);
    });

    return sum;
}

const sumItem = () => {
    let showCheck = check;
    let sum = 0;

    showCheck.forEach((item, index, array) => {
        sum += +showCheck[index].amount;
    });

    console.log(sum);
    return sum;
}

function showCheck() {

    let showCheck = check;

    showCheck.forEach((item, index, array) => {
        document.getElementById('showCheck').innerHTML += `<li>${showCheck[index].name}:
         ${showCheck[index].amount} * ${showCheck[index].price} | ${(showCheck[index].amount * showCheck[index].price).toFixed(2)}</li>`;
    });

    document.getElementById('showCheck').innerHTML += `<li>Итого: ${sumCheck()}</li>`;
    document.getElementById('showCheck').innerHTML += `<li>Средняя стоимость одного товара: ${(sumCheck() / sumItem()).toFixed(2)}</li>`;
}