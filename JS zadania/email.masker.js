function maskEmail(email) {
  let y = email.indexOf("@");
  let data = email.slice(0, y);
  let domain = email.slice(y);
  let i;
  for (i = 1; i < y-1; i++) {
    data = data.replace(email[i], "*")
  }
  return data+domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));