var generator = require("generate-password");

function generatePassword() {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    strict: true,
  });
  console.log(password);
}
generatePassword();
