const getInput = document.getElementById('inputText').value;
getInput.focus();
const encryptedText = [];
let decryptedText = null;

function encrypter() {
  for (let i = 0; i < getInput.length; i++) {
    if (getInput[i] === 'e') {encryptedText[i] = 'enter';
    } else if (getInput[i] === 'i') {encryptedText[i] = 'imes';
    } else if (getInput[i] === 'a') {encryptedText[i] = 'ai';
    } else if (getInput[i] === 'o') {encryptedText[i] = 'ober';
    } else if (getInput[i] === 'u') {encryptedText[i] = 'ufat';
    } else {encryptedText[i] = getInput[i]};
  };
  let finalText = encryptedText.join('');
  // document.getElementById('inputText').innerHTML = finalText;
  // document.write(finalText);
  console.log(finalText)
};

function decrypter() {
    decryptedText = getInput.replace(/enter/g, 'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    console.log(decryptedText)
};