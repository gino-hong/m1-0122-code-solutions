var $background = document.querySelector('body');
var $button = document.querySelector('button');

$button.addEventListener('click', function () {
  if ($button.className === 'circle dark-button') {
    $button.classList.remove('dark-button');
    $button.classList.add('light-button');
    $background.className = 'light-background';
  } else if ($button.className === 'circle light-button') {
    $button.classList.remove('light-button');
    $button.classList.add('dark-button');
    $background.className = 'dark-background';
  }
});
