const favoriteIcon = document.querySelectorAll(".favorite-icon");

function hasFilled() {
  const button = event.target;
  const hasFilledClass = button.classList.contains('filled');

  if (hasFilledClass == true) {
    button.classList.remove('filled');
    button.innerHTML = '&#9825;';
  }
  else {
    button.classList.add('filled');
    button.innerHTML = '&#10084;';
  }
}


favoriteIcon.forEach((button) => {
  button.addEventListener("click", hasFilled);
}) 
