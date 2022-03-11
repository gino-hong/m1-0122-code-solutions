var $blueButton = document.querySelector('.blue-button');
var $orangeButton = document.querySelector('.orange-button');
var $modal = document.querySelector('.modal');
var $overlay = document.querySelector('.overlay');

$blueButton.addEventListener('click', function () {
  $modal.classList.remove('off');
  $overlay.classList.remove('off');
});

$orangeButton.addEventListener('click', function () {
  if ($modal.className === 'modal') {
    $modal.classList.add('off');
    $overlay.classList.add('off');
  }
});
