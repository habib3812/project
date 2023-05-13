
  function subtotel(phonOrCasTotel){
    const phoneTotel= document.getElementById(phonOrCasTotel);
    const phoneTotelstring=phoneTotel.innerText;
    const phoneTotelNumber= parseInt(phoneTotelstring)
return phoneTotelNumber;
  }
  // ______________________________________
  function tnnerText(id,setvalue){ 

    const suntotels= document.getElementById(id);
    suntotels.innerText=setvalue;
  
  }
  // +++++++++++++++++++++++++++++++++++++++++++
 
function calcoletsubtotel(){
    const ponetotel= subtotel("mobileTk")
    const casetotel= subtotel("casenTotel")
   
    const subTotels= ponetotel + casetotel;
 //    console.log(subTotel);
 tnnerText("suntotel",subTotels)
// ____________________________

const texString = (subTotels * 0.1).toFixed(2);
const Number= parseInt( texString)
  tnnerText("tax",Number)
  // _______________________________________
  const finulTotels= subtotel("finulTotel")
  const finulTotel= Number + subTotels;
  tnnerText("finulTotel",finulTotel);
}