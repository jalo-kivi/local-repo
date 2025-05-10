const textInput = document.getElementById('text-input');

const charCount = document.getElementById('char-count');

const maxLength = 50;

textInput.addEventListener("input", () => {
  let text = textInput.value;

  if(text.length > maxLength) {
    text = text.slice(0, maxLength);
    textInput.value = text;
  }

  charCount.textContent = `Character Count: ${text.length}/50`;

  if (text.length == maxLength) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove('red');
  }

});
