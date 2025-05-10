function pyramid (pattern, rows, boolean) {
  let lines = [];
  let maxWidth = 2 * rows -1;

  if (boolean == false) {
    for (let i = 0; i < rows; i++) {
    let chars = 2*i + 1;
    let spaces = Math.floor((maxWidth - chars) / 2);
    let line = " ".repeat(spaces) + pattern.repeat(chars);
    lines.push(line);
    }
  }
  else {
    for (let i = rows - 1; i >= 0; i--) {
            let chars = 2 * i + 1;
            let spaces = Math.floor((maxWidth - chars) / 2);
            let line = ' '.repeat(spaces) + pattern.repeat(chars);
            lines.push(line);
        }
  }
  return '\n' + lines.join('\n') + '\n';
}

console.log(pyramid("o", 4, true));

console.log(pyramid("x", 10, false));