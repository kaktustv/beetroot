//1 

const shoppingList = [{
    name: "cider",
    amount: 3,
    buy: true,
  },
  {
    name: "broad",
    amount: 1,
    buy: true,
  },
  {
    name: "milk",
    amount: 2,
    buy: false,
  },
];

function addItem() {
  const newItemName = document.getElementById('addItem').value;
  const newItemAmount = +document.getElementById('amountItem').value;
  document.getElementById('addItem').value = '';
  document.getElementById('amountItem').value = '';

  let newItem = {
    name: newItemName,
    amount: newItemAmount,
    buy: false,
  }
  let needAdd = false;

  for (let index = 0; index < shoppingList.length; index++) {
    if (shoppingList[index].name === newItem.name) {
      shoppingList[index].amount += newItem.amount;
      return needAdd = false;
      break;
    } else if (newItem.name === ''){
      needAdd = false;
      break;
    } else if (!(newItem.name === '')){
      needAdd = true;
  }  
}

  if (needAdd === true) {shoppingList.push(newItem)};
}

function buyItem() {
  const buyItem = document.getElementById('buyItem').value;
  document.getElementById('buyItem').value = '';
  
  shoppingList.forEach((item, index, array) => {
    if (shoppingList[index].name === buyItem) {
      shoppingList[index].buy = true;
    }
  })
}

function showList() {
  addItem();
  buyItem();
  const showShoppingList = shoppingList.sort(function (a, b) {
    if (a.buy > b.buy) return 1;
    if (a.buy == b.buy) return 0;
    if (a.buy < b.buy) return -1;
  })
  document.getElementById('outList').innerHTML = '';

  showShoppingList.forEach((item, index, arr) => {
    let buy = '';
    if (arr[index].buy === true) {
      buy = 'Bought';
    } else {
      buy = 'No bought';
    };
    document.getElementById('outList').innerHTML += `<p>${arr[index].name.toLocaleUpperCase()}: ${buy}, ${arr[index].amount}</p>`;
    console.log(showShoppingList);
  });
}