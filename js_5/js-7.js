function sevenTask() {
  const string = prompt('Введите число:');
  const num = prompt('На сколько чисел сдвинуть?');
  let arrayString = [];
  console.log(string);

  for (let i = 0; i < string.length; i++) {
    arrayString.push(string.charAt(i));
  }

  let arraySplicing = arrayString.splice(0, num);
  console.log(arraySplicing);
  for(let i = 0; i < arraySplicing.length; i++){
    arrayString.push(arraySplicing[i]);
  }

  alert(arrayString.join(''));
}
