//1

function carRun() {
    showCar();
}

function showDistanceTime() {
    return (document.getElementById(
        'showCarDistanceTime'
    ).innerHTML = `Потребуеться времени: ${checkTime(time())}`);
}

const car = {
    develop: 'Германия',
    model: 'Audi A6 AllRoad',
    yearUp: '2012 - 2014',
    mediumSpeed: 125,
};

function showCar() {
    document.getElementById('showCarInformation').innerHTML = `Об автомобиле:
<br>
<ul>
<li>Производитель: ${car.develop},</li>
<li>Модель: ${car.model},</li>
<li>Годы выпуска: ${car.yearUp},</li>
<li>Средняя скорость: ${car.mediumSpeed}.</li>
<ul>`;
}

const getDistance = () => {
    return document.getElementById('distance').value;
};

function time() {
    let distance = getDistance() / +car.mediumSpeed;
    if (distance > 4) {
        distance = distance + Math.floor(distance / 4);
    } else {
        return distance.toFixed(1);
    }
    return distance.toFixed(1);
}

function checkTime(time) {
    let hoursWord = '';
    if (time <= 1) {
        return (hoursWord = `${time} час`);
    } else if (time <= 4) {
        return (hoursWord = `${time} часа`);
    } else {
        return (hoursWord = `${time} часов`);
    }
}

//2

const numOne = () => {
    return +document.getElementById('numOne').value;
};
const denomOne = () => {
    return +document.getElementById('denomOne').value;
};
const numTwo = () => {
    return +document.getElementById('numTwo').value;
};
const denomTwo = () => {
    return +document.getElementById('denomTwo').value;
};

function getNum() {

    const fractionOne = {
        a: numOne(),
        b: denomOne(),
    };

    const fractionTwo = {
        a: numTwo(),
        b: denomTwo(),
    };

    return [fractionOne, fractionTwo]
}

function fractionReduct(a, b) {
    reduct: for (let i = 2; i <= (a * b); i++) {
        if (a % i == 0 && b % i == 0) {
            a = a / i;
            b = b / i;
            console.log(a, b, i);
            i = 1
            continue reduct;
        } else {
            continue reduct;
        }
    }

    if (a === 0 && b === 0) {
        return `1`;
    } else if (b === 0 && b === 1) {
        return `${a}`;
    } else {
        return `${a} / ${b}`;
    }
}

const sum = (aa, ab, ba, bb) => {
    if (ab === bb) {
        document.getElementById('showFractionSum').innerHTML = `Результат: ${fractionReduct((aa + ba), (ab + ba))}`;
    } else if (ab !== bb) {
        return (document.getElementById('showFractionSum').innerHTML = `Результат: ${fractionReduct((aa * bb) + (ba * ab), (ab * bb))}`);
    }
};

const min = (aa, ab, ba, bb) => {
    if (ab === bb) {
        document.getElementById('showFractionMin').innerHTML = `Результат: ${fractionReduct((aa - ba), (ab - bb))}`;
    } else if (ab !== bb) {
        return (document.getElementById('showFractionMin').innerHTML = `Результат: ${fractionReduct((aa * bb) - (ba * ab), (ab * bb))}`);
    }
};

const mul = (aa, ab, ba, bb) => {
    return document.getElementById('showFractionMul').innerHTML = `Результат: ${fractionReduct((aa * ba), (ab * bb))}`;
};

const dev = (aa, ab, ba, bb) => {
    return document.getElementById('showFractionDev').innerHTML = `Результат: ${fractionReduct((aa * bb), (ab * ba))}`;
};

function fractionSum() {
    const [fractionOne, fractionTwo] = getNum();
    sum(fractionOne.a, fractionOne.b, fractionTwo.a, fractionTwo.b);
}

function fractionMin() {
    const [fractionOne, fractionTwo] = getNum();
    min(fractionOne.a, fractionOne.b, fractionTwo.a, fractionTwo.b);
}

function fractionMul() {
    const [fractionOne, fractionTwo] = getNum();
    mul(fractionOne.a, fractionOne.b, fractionTwo.a, fractionTwo.b);
}

function fractionDev() {
    const [fractionOne, fractionTwo] = getNum();
    dev(fractionOne.a, fractionOne.b, fractionTwo.a, fractionTwo.b);
}

//3

const getHours = () => {
    return +document.getElementById('getHours').value;
}

const getMinutes = () => {
    return +document.getElementById('getMinutes').value;
}

const getSeconds = () => {
    return +document.getElementById('getSeconds').value;
}

function getTimes() {

    let times = {
        hours: getHours(),
        minutes: getMinutes(),
        seconds: getSeconds(),
    }

    return [times];
}

function showTimes() {
    const [times] = getTimes();

    addNullTime(outTimes);
}

function addNullTime(link) {
    let h = times.hours;
    let m = times.minutes;
    let s = times.seconds;

    h <= 9 ? h = `0${h}` : h;
    m <= 9 ? m = `0${m}` : m;
    s <= 9 ? s = `0${s}` : s;

    return document.getElementById(`${link}`).innerHTML = `${h}:${m}:${s}`;

}

function inSec(h,m,s) {
    return (((h * 60) * 60) + (m * 60) + s);
}

function fromSec(s) {
    let h = Math.floor(s / 3600);
    let m = Math.floor(s / 60) - (h * 60);
    s = s % 60;

    let times = {
        hours: h,
        minutes: m,
        seconds: s,
    }

    return [times];
}

function addTimesSec() {
    [times] = getTimes();

    let s = inSec(times.hours, times.minutes, times.seconds);
    s += document.getElementById('addSec').value;
    
    [times] = fromSec(s);

    addNullTime(addSec);
}