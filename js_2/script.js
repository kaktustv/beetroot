//1

function comparison() {
    const numberX = +prompt('Введите А');
    const numberY = +prompt('Введите B');

    if (numberX < numberY) {
        alert(-1);
    } else if (numberX > numberY) {
        alert(1);
    } else {
        alert(0);
    }
}

//2

function factorial() {
    let inputNumber = +prompt('Введите число:');
    let total = 1;

    for (i = 0; i < inputNumber; i++) {
        total = total * (inputNumber - i);
    }

    alert(inputNumber + '! = ' + total);
}

//3

function numberInLine() {
    function askNumber() {
        return prompt('Введите число:');
    }
    alert(Number(askNumber() + '' + askNumber() + '' + askNumber()));
}

//4

function showSquear() {
    const parOne = +prompt('1');
    const parTwo = +prompt('2');

    if (parTwo === 0) {
        return alert(parOne ** 2);
    } else {
        return alert(parOne * parTwo);
    }
}

//5

function perfuctNumber() {
    const perfuctNumberX = +prompt('Введите число:');
    // console.log(perfuctNumberX);

    let perfuctNumberSum = 0;
    // console.log(perfuctNumberSum);

    for (let i = 1; i < perfuctNumberX; i++) {
        if (perfuctNumberX % i === 0) {
            perfuctNumberSum += i;
            // console.log(i);
        } else {
            continue;
        }
    }

    if (perfuctNumberSum === perfuctNumberX) {
        alert('Совершенное');
    } else {
        alert('Несовершенное');
    }
}

//6

function diapazonPerfuctNumber() {
    const diapazonPerfuctNumberMin = +prompt('Введите min число:');
    const diapazonPerfuctNumberMax = +prompt('Введите max число:');


    let perfuctNumberSum = 0;
    // console.log(perfuctNumberSum);

    for (let perfuctNumberX = diapazonPerfuctNumberMin; perfuctNumberX < diapazonPerfuctNumberMax; perfuctNumberX++) {
        for (let i = 1; i < perfuctNumberX; i++) {
            if (perfuctNumberX % i === 0) {
                perfuctNumberSum += i;
                console.log(i);
            } else {
                // continue;
            }

            if (perfuctNumberSum === perfuctNumberX) {
                alert(perfuctNumberSum + ' Совершенное');
            } else {
                continue;
            }
        }
    }

}

//7

function timeOut() {
    let timeOutHour = +prompt('Введите часы:', '00');
    let timeOutMin = +prompt('Введите минуты:', '00');
    let timeOutSec = +prompt('Введите секунды:', '00');

    timeOutHour <= 9 ? timeOutHour = `0${timeOutHour}` : timeOutHour;
    timeOutMin <= 9 ? timeOutMin = `0${timeOutMin}` : timeOutMin;
    timeOutSec <= 9 ? timeOutSec = `0${timeOutSec}` : timeOutSec;

    document.getElementById('timeOut').innerHTML = `Время: ${timeOutHour}:${timeOutMin}:${timeOutSec}`;
}

//8

function transformInSec() {
    const transformInSecHour = +prompt('Введите часы:', '00');
    const transformInSecMin = +prompt('Введите минуты:', '00');
    const transformInSecSec = +prompt('Введите секунды:', '00');

    let transformInSecSum = () => {
        return (((transformInSecHour * 60) * 60) + (transformInSecMin * 60) + transformInSecSec);
    }

    document.getElementById('transformInSecOut').innerHTML = `Время в секундах: ${transformInSecSum()} c`;
}

//9

function transformFormSec() {
    let transformFromSecSec = +prompt('Введите секунды:', '00');

    let transformFromSecHour = Math.floor(transformFromSecSec / 3600);
    let transformFromSecMin = Math.floor(transformFromSecSec / 60) - (transformFromSecHour * 60);
    transformFromSecSec = transformFromSecSec % 60;

    if (transformFromSecHour <= 9) transformFromSecHour = `0${transformFromSecHour}`;
    if (transformFromSecMin <= 9) transformFromSecMin = `0${transformFromSecMin}`;
    if (transformFromSecSec <= 9) transformFromSecSec = `0${transformFromSecSec}`;

    document.getElementById('transformFormSec').innerHTML = `Время: ${transformFromSecHour}:${transformFromSecMin}:${transformFromSecSec}`;
}

//10

function diffTime() {
    const diffTimeAsk = () => {
        let diffTimeAsk = 0;
        diffTimeAsk += +prompt('Введите часы:', '00') * 3600;
        diffTimeAsk += +prompt('Введите минуты:', '00') * 60;
        diffTimeAsk += +prompt('Введите секунды:', '00');
        return diffTimeAsk;
    }

    const deffTimeOne = diffTimeAsk();
    console.log(deffTimeOne);
    const deffTimeTwo = diffTimeAsk();
    console.log(deffTimeTwo);

    const diffTimeAnswear = () => {
        if (deffTimeOne > deffTimeTwo) {
            return deffTimeOne - deffTimeTwo;
        } else if (deffTimeOne < deffTimeTwo) {
            return deffTimeTwo - deffTimeOne;
        } else {
            //
        }
    }

    let diffTimeHours = Math.floor(diffTimeAnswear() / 3600);
    let diffTimeMin = Math.floor(diffTimeAnswear() / 60) - (diffTimeHours * 60);
    let diffTimeSec = diffTimeAnswear() % 60;

    if (diffTimeHours <= 9) diffTimeHours = `0${diffTimeHours}`;
    if (diffTimeMin <= 9) diffTimeMin = `0${diffTimeMin}`;
    if (diffTimeSec <= 9) diffTimeSec = `0${diffTimeSec}`;

    document.getElementById('diffTime').innerHTML = `Разница во времени: ${diffTimeHours}:${diffTimeMin}:${diffTimeSec}`;
}