function fiveTask() {
  let pos = 0;
  let neg = 0;
  let even = 0;
  let odd = 0;

  for (let i = 1; i <= 10; i++) {
    let num = +prompt(`Введите ${i}-ое число`, 0);

    switch (Math.sign(num)) {
      case 1:
        pos++;
        break;
      case -1:
        neg++;
        break;
    }

    switch (num % 2 === 0) {
      case true:
        even++;
        break;
      case false:
        odd++;
        break;
    }
  }

  alert(
    `${pos} - положительных, ${neg} - отрицательных, ${even} - четных, ${odd} - не четных`
  );
}
