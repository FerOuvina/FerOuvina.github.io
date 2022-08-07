const getInput = document.getElementById('inputText');
let textToEncrypt = '';
let decryptedText = null;

function encrypter() {
  textToEncrypt = getInput.value;
  const encryptedText = [];
  for (let i = 0; i < textToEncrypt.length; i++) {
    if (textToEncrypt[i] === 'e') {encryptedText[i] = 'enter';
    } else if (textToEncrypt[i] === 'i') {encryptedText[i] = 'imes';
    } else if (textToEncrypt[i] === 'a') {encryptedText[i] = 'ai';
    } else if (textToEncrypt[i] === 'o') {encryptedText[i] = 'ober';
    } else if (textToEncrypt[i] === 'u') {encryptedText[i] = 'ufat';
    } else {encryptedText[i] = textToEncrypt[i]};
  };
  let finalText = encryptedText.join('');
  // document.getElementById('inputText').innerHTML = finalText;
  // document.write(finalText);
  console.log(finalText)
};

function decrypter() {
    decryptedText = textToEncrypt.replace(/enter/g, 'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    console.log(decryptedText)
};