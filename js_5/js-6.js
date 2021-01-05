function sixTask() {
  for (let i = 0; i < Infinity; i++) {
    let repet = confirm(`Еще один пример?`);

    if (repet === true) {
      const nOne = +prompt('Введите первое число', 0);
      const nTwo = +prompt('Введите второе число', 0);
      const act = prompt('Введите нужное деуствие', 0);
      let answer = 0;

      switch (act) {
        case '+':
          answer = nOne + nTwo;
          break;
        case '-':
          answer = nOne - nTwo;
          break;
        case '*':
          answer = nOne * nTwo;
          break;
        case '/':
          answer = nOne / nTwo;
          break;
      }
      alert(answer);
      continue;
    } else {
      break;
    }
  }
}
