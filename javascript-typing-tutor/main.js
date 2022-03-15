var $span = document.querySelectorAll('span');
var $h2 = document.querySelector('h2');
var $off = document.querySelector('.off');
var $button = document.querySelector('button');
var index = 0;
var errors = 0;

document.addEventListener('keydown', function (e) {
  if (index < $span.length) {
    if ($span.item(index).textContent === e.key) {
      $span.item(index).classList.remove('underline-red');
      $span.item(index).classList.remove('red');
      $span.item(index).classList.add('green');
      $span.item(index).classList.remove('underline-black');
      if (index < $span.length - 1) {
        $span.item(index + 1).classList.add('underline-black');
      }
      index++;
    } else {
      if ($span.item(index).className === 'underline-black') {
        errors++;
      }
      $span.item(index).className = 'underline-red red';
      if (index > 0) {
        $span.item(index - 1).classList.remove('underline-black');
      }
    }
  }
  if (index === $span.length) {
    var accuracy = Math.round((($span.length - errors) / $span.length * 100)) + '%';
    $h2.textContent = 'Typing Accuracy: ' + accuracy;
    $off.classList.remove('off');
    $off.classList.add('on');
  }
});

$button.addEventListener('click', function () {
  $span.item(0).className = 'underline-black';
  for (var i = 1; i < $span.length; i++) {
    $span.item(i).className = '';
  }
  index = 0;
  errors = 0;
  $off.className = 'off';
});
