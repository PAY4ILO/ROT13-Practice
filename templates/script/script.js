const uss = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const usb = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const rus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ','ъ', 'ь', 'ы', 'э', 'ю', 'я'];
const rub = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ','Ъ', 'Ь', 'Ы', 'Э', 'Ю', 'Я'];

function submit() {
    const inputText = document.getElementById('inputText').value;
    const mode = document.getElementById('mode').value;
     let result = ''; 

    for (let i = 0; i < inputText.length; i++) {
            let x = inputText[i];
            let y = x;
            let found = false;

        for (let j = 0; j < uss.length; j++) {
        if (x === uss[j]) {
            found = true; 
        
        if (mode === "decrypt") {
            let index = (j - 13 + 26) % 26;
            y = uss[index];
            break;
        }
        if ( mode === "encrypt") {
            let index = (j + 13) % 26;
            y = uss[index];
            break;
          }
       }
    }
        if (!found) {
        for (let j = 0; j < usb.length; j++) {
        if (x === usb[j]) {
            found = true;
        if (mode === "decrypt") {
            let index = (j - 13 + 26) % 26;
            y = usb[index];
            break;
            }
        if (mode === "encrypt") {
            let index = (j + 13) % 26;
            y = usb[index];
            break;
            }
          }
       }
    }
        if (!found) {
        for (let j = 0; j < rus.length; j++) {
        if (x === rus[j]) {
            found = true;
        if (mode === "decrypt") {
            let index = (j - 13 + 33) % 33;
            y = rus[index];
            break;
            }
        if (mode === "encrypt") {
            let index = (j + 13) % 33;
            y = rus[index];
            break;
            }
          }
       }
    }
        if (!found) {
        for (let j = 0; j < rub.length; j++) {
        if (x === rub[j]) {
            found = true;
        if (mode === "decrypt") {
            let index = (j - 13 + 33) % 33;
            y = rub[index];
            break;
             }
        if (mode === "encrypt") {
            let index = (j + 13) % 33;
            y = rub[index];
            break;
             }
          }
       }
    }
if (inputText === 'PAKOK') { 
    const gif = document.createElement('img');
    gif.src = 'image/GADEEEM.gif';
    gif.style.width = '300px';
    document.getElementById('gifContainer').innerHTML = '';
    document.getElementById('gifContainer').appendChild(gif);
}
if (inputText === 'PAKOKEND') { 
    const gif = document.createElement('img');
    gif.src = 'image/GADEEEM.gif';
    gif.style.width = '0px';
    document.getElementById('gifContainer').innerHTML = '';
    document.getElementById('gifContainer').appendChild(gif);
}
        result += y;
     } 
    document.getElementById('resultText').value = result;
  }