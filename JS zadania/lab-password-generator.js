function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * characters.length);
    password += characters[randomChar];
  }
  return password;
}

let password = generatePassword(15);

console.log(`Generated password: ${password}`);