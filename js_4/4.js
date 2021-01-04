let th = ['Номер аудиторий', 'Кол-во мест', 'Название факультета'];

let cab = [
  {
    cab: 11,
    per: 15,
    nFac: 'Front-end',
  },
  {
    cab: 21,
    per: 18,
    nFac: 'Front-end',
  },
  {
    cab: 12,
    per: 10,
    nFac: 'Back-end',
  },
  {
    cab: 22,
    per: 16,
    nFac: 'Back-end',
  },
  {
    cab: 13,
    per: 30,
    nFac: 'English',
  },
  {
    cab: 23,
    per: 13,
    nFac: 'English',
  },
  {
    cab: 14,
    per: 15,
    nFac: 'Marketing',
  },
  {
    cab: 24,
    per: 18,
    nFac: 'Marketing',
  },
];

let group = [
  {
    name: 'Beetroot',
    per: 30,
    nFac: 'Front-end',
  },
  {
    name: 'Future',
    per: 6,
    nFac: 'Back-end',
  },
  {
    name: 'Beautify',
    per: 14,
    nFac: 'English',
  },
  {
    name: 'IS-3',
    per: 5,
    nFac: 'Marketing',
  },
];

function collectHeading() {
  let theading = '';

  th.forEach((item) => {
    theading += `<th>${item}</th>`;
  });

  document.getElementById('table').innerHTML += `
    <tr>
        ${theading}
    <tr>`;
}

function collectCab() {
  cab.forEach((item, index, array) => {
    document.getElementById(
      'table'
    ).innerHTML += `<tr><td>${array[index].cab}</td><td>${array[index].per}</td><td>${array[index].nFac}</td></tr>`;
  });
}

function showCab() {
  document.getElementById('table').innerHTML = '';
  collectHeading();
  collectCab();
}

function showByFac() {
  document.getElementById('table').innerHTML = '';
  collectHeading();

  console.log(document.getElementById('cabSelect').value);

  cab.forEach((item, index, array) => {
    if (array[index].nFac === document.getElementById('cabSelect').value) {
      document.getElementById(
        'table'
      ).innerHTML += `<tr><td>${array[index].cab}</td><td>${array[index].per}</td><td>${array[index].nFac}</td></tr>`;
    }
  });
}

function showByPer() {
  document.getElementById('table').innerHTML = '';
  collectHeading();

  console.log(document.getElementById('cabSelect').value);

  let per = 0;
  group.forEach((item, index, array) => {
    if (array[index].nFac === document.getElementById('cabSelect').value) {
      per = array[index].per;
    }
  });

  console.log(per);

  cab.forEach((item, index, array) => {
    if (array[index].per >= per) {
      document.getElementById(
        'table'
      ).innerHTML += `<tr><td>${array[index].cab}</td><td>${array[index].per}</td><td>${array[index].nFac}</td></tr>`;
    }
  });
}

function sortByPer() {
  document.getElementById('table').innerHTML = '';
  collectHeading();

  cab.sort(function (a, b) {
    if (a.per > b.per) return 1;
    if (a.per == b.per) return 0;
    if (a.per < b.per) return -1;
  });

  collectCab();
}

function sortByFac() {
    document.getElementById('table').innerHTML = '';
    collectHeading();
  
    cab.sort(function (a, b) {
      if (a.nFac.toLowerCase() > b.nFac.toLowerCase()) return 1;
      if (a.nFac.toLowerCase() == b.nFac.toLowerCase()) return 0;
      if (a.nFac.toLowerCase() < b.nFac.toLowerCase()) return -1;
    });
    
    collectCab();
  }