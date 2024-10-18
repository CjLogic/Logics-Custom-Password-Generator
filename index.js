const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatebtn = document.querySelector("#generatebtn");
let passwordOne = document.querySelector("#password-one");
let passwordTwo = document.querySelector("#password-two");
let copyBtn1 = document.querySelector("#copy-btn1");
let copyBtn2 = document.querySelector("#copy-btn2");

function getRandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateBtn() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";

  // Ensure charCount is a string and not a variable
  const charCountValue = document.getElementById("charCount").value;

  // Clear any existing input
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = "";

  // Create the new input field
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "dynamicInput";
  newInput.maxLength = charCountValue;

  const minPassword = 8;
  const maxPassword = 15;

  let message = "";

  if (charCountValue < minPassword) {
    message = "Need more than 8 characters";
    passwordOne.textContent = message;
    passwordTwo.textContent = message;
  } else if (charCountValue > maxPassword) {
    message = "Too many characters";
    passwordOne.textContent = message;
    passwordTwo.textContent = message;
  } else {
    for (let i = 0; i < charCountValue; i++) {
      passwordOne.textContent += getRandomChar();
      passwordTwo.textContent += getRandomChar();
    }
  }
}

copyBtn1.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOne.textContent);
  copyBtn1.textContent = "Copied!";
  setTimeout(function () {
    copyBtn1.textContent = "Copy";
  }, 2000);
});

copyBtn2.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOne.textContent);
  copyBtn2.textContent = "Copied!";
  setTimeout(function () {
    copyBtn2.textContent = "Copy";
  }, 2000);
});
