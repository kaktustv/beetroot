// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

function whoThis() {
    const year = prompt('Сколько Вам лет');
    if (year <= 2) {
        alert('Ребенок');
    } else if (year >= 12 && year <= 17) {
        alert('Подросток');
    } else if (year >= 18 && year <= 59) {
        alert('Взрослый');
    } else if (year >= 60) {
        alert('Пенсионер');
    }
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише(1–!, 2– @, 3–# и т.д).

function spSymbol() {
    const n = +prompt('Введите число');

    switch (n) {
        case 1:
            alert('1 – !');
            break;
        case 2:
            alert('2 - @');
            break;
        case 3:
            alert('3 - #');
            break;
        case 4:
            alert('4 - $');
            break;
        case 5:
            alert('5 - %');
            break;
        case 6:
            alert('6 - ^');
            break;
        case 7:
            alert('7 - &');
            break;
        case 8:
            alert('8 - *');
            break;
        case 9:
            alert('5 - (');
            break;
        case 0:
            alert('5 - )');
            break;

        default:
            alert('Введите число от 0-9');
            break;
    }
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

function equalse() {
    const number = prompt('Введите трех значное число');

    const n = number.charAt(0);
    const nn = number.charAt(1);
    const nnn = number.charAt(2);

    if (n === nn) {
        alert('Да, есть)');
    } else if (n === nnn) {
        alert('Да, есть)');
    } else if (nn === nnn) {
        alert('Да, есть)');
    } else {
        alert('Нет, нету)');
    }
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const leapYear = () => {
    const year = +prompt('Введите год:');

    (((year % 400 === 0) || (year % 4 === 0)) && !(year % 100 === 0)) ? alert('Год высокосный!'): alert('Год не высокосный!');
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const popNum = () => {
    const number = prompt('Введите 5-ти разрядное число:');

    const n = number.charAt(0);
    const nn = number.charAt(1);
    const nnnn = number.charAt(3);
    const nnnnn = number.charAt(4);

    if (n === nnnnn && nn === nnnn) {
        alert('Это чило палиндром!');
    } else {
        alert('Это чило не палиндром!');
    }

}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const giveCurrency = () => {
    const currency = +prompt('1 - EUR; 2 - UAN; 3 - AZN; Выберите:');

    if (currency === 1) {
        return 0.83
    } else if (currency === 2) {
        return 28.09
    } else if (currency === 3) {
        return 1.70
    } else {
        giveCurrency();
    }
}

const giveMoney = () => {
    const money = +prompt('Введите Вашу суму');

    return money;
}

const convert = () => {
    const currency = giveCurrency();
    const money = giveMoney();

    const result = currency * money;
    return alert(result)
}

//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function promo() {
    const howMuch = +prompt('Сколько стоит?');

    function howPromo() {
        if (howMuch >= 200 && howMuch < 300) {
            return (howMuch / 100) * 3
        } else if (howMuch >= 300 && howMuch < 500) {
            return (howMuch / 100) * 5
        } else if (howMuch >= 500) {
            return (howMuch / 100) * 7
        } else {
            return (howMuch / 100) * 0
        }
    }

    return document.getElementById('promo').innerHTML = 'C Вас: ' + (howMuch - howPromo()) + '. Скидка ' + howPromo() + ' грн.';
}

//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

function checkDiameter() {
    const diameter = () => {
        return (+prompt('Введите длину окружности:') / Math.PI);
    }
    const perimeter = () => {
        return (+prompt('Введите перриметр квадрата:') / 4);
    }

    if (perimeter() >= diameter()) {
        alert('Влезет');
    } else {
        alert('Не влезет');
    }
}

//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function quest() {

    const task_1 = () => {
        const answer_1 = +prompt('Тебя зовут Саша? 1 - Да; 2 - Нет; 3 - 50 на 50:');
        if (answer_1 === 1) {
            return 2
        } else {
            return 0
        }
    }

    const task_2 = () => {
        const answer_2 = +prompt('Твоя фамилия Петров? 1 - Да; 2 - Нет; 3 - 50 на 50:');
        if (answer_2 === 2) {
            return 2
        } else {
            return 0
        }
    }

    const task_3 = () => {
        const answer_3 = +prompt('Твой возраст 27? 1 - Да; 2 - Нет; 3 - 50 на 50:');
        if (answer_3 === 1) {
            return 2
        } else {
            return 0
        }
    }

    return document.getElementById('quest').innerHTML = 'Ваш результат: ' + (task_1() + task_2() + task_3());
}

//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

function date() {
    const dateDay = () => {
        day = +prompt('Введите день:')
        return ++day
    };
    const dateMounth = () => {
        mounth = +prompt('(1 - 12) Введите месяц:')
        return --mounth
    };
    const dateYear = () => {
        year = +prompt('Введите год:')
        return year
    };

    let showDate = new Date(dateYear(), dateMounth(), dateDay());

    alert(showDate);
}