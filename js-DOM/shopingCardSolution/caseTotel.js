// ()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function ProductPlassMinus (isiiIncrease){
    const case_input= document.getElementById("caseinput");
    const case_input_sting = case_input.value;
    const case_input_numver= parseInt(case_input_sting) ;
  
  let caseNewNumber;
  
  if (isiiIncrease===true){
    caseNewNumber = case_input_numver + 1;
  }
  else{
    caseNewNumber = case_input_numver-1;
  }
  case_input.value = caseNewNumber;
  return caseNewNumber;
  }
//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function updetTotel(plassTotel){
    const casinTotel=document.getElementById("casenTotel");
    const totelTk= plassTotel * 59;
    casinTotel.innerText=totelTk;
  }


// ======================================
document.getElementById("casePlasBtn").addEventListener("click",function(){

 const plassTotel= ProductPlassMinus(true);

 updetTotel(plassTotel);
 calcoletsubtotel()

})


document.getElementById("caseMinusBtn").addEventListener("click",function(){
 const  minusTotel= ProductPlassMinus(false);
 updetTotel(minusTotel);
 calcoletsubtotel()
})














































