// ***************input Text To Number***************
function inputTextToNumber(inputId){
const inputFild = document.getElementById(inputId);
const inputText= inputFild.value;
const inputNumber= parseFloat(inputText);
inputFild.value=" ";
return inputNumber;
}
// ______________ text to number_____________________________________________________
function  textToNumber(textId){
     const displyTextGate= document.getElementById(textId);
     const displyText= displyTextGate.innerText;
     const displyTextToNumber=parseFloat(displyText);
return displyTextToNumber;
}

// **********************inner Texto Value**************************************
function setelemintToNewvalue(elementId , newvalence){
const textElement= document.getElementById(elementId);
textElement.innerText= newvalence;
}

