// This code is used to encrypt and decrypt passwords using a custom character mapping.
const codeList = ` ABCDEFGHIJKLMNOPQRSTUVWXYZab'cdefghijklmnopqrstuvwxyz0123456"789!@#$%^&*()_+[]{}|;:,.<>?~`;
const newList = `?a7Nx4(mg~AT"Vt.&Y$MXZ<Rfyn ksozw0)%_:}@9'LJ2u]h[jC!|HpK+lqU;,vrQD^W8d31FE#I6{e>*5bBicSPOG`;
const arrList = [
  newList.slice(0, 30),
  newList.slice(30, 60),
  newList.slice(60, 90),
];
function encryptPassword(password) {
  let encrypted = "";
  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    const index = codeList.indexOf(char);
    if (index !== -1) {
      encrypted += newList.charAt(index);
    } else {
      encrypted += char;
    }
  }
  return encrypted;
}
function decryptPassword(encryptedPassword) {
  let decrypted = "";
  for (let i = 0; i < encryptedPassword.length; i++) {
    const char = encryptedPassword.charAt(i);
    const index = newList.indexOf(char);
    if (index !== -1) {
      decrypted += codeList.charAt(index);
    } else {
      decrypted += char; // 如果字符不在newList中，保持原样
    }
  }
  return decrypted;
}

const testPassword = "hello i don't know what to do; And how do you do?";
const encrypted = encryptPassword(testPassword);
const decrypted = decryptPassword(encrypted);
console.log("Original:", testPassword);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
if (decrypted === testPassword) {
  console.log("success");
}
