const $red = document.getElementById('red');
const $yellow = document.getElementById('yellow');
const $green = document.getElementById('green');

function switchColor() {
  if ($red.classList.contains('active')) {
    $red.classList.remove('active');
    $yellow.classList.add('active');
  } else if ($yellow.classList.contains('active')){
    $yellow.classList.remove('active');
    $green.classList.add('active');
  } else {
    $green.classList.remove('active');
    $red.classList.add('active');
  }
}
