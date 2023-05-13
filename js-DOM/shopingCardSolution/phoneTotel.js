// ()
// ++++++++++++++++++++++++++++plus and minus+++++++++++++++++++++++++++++++++++
function productPlassMinuss(isIncrease){
    const mobile_input= document.getElementById("mobileNumber");
    const mobile_input_sting = mobile_input.value;
    const mobile_input_numver= parseInt(mobile_input_sting) ;

    let mobilePlusMinuss;
    if(isIncrease===true){
        mobilePlusMinuss = mobile_input_numver +1 ;
    }
    else{
        mobilePlusMinuss = mobile_input_numver - 1;
      }

mobile_input.value = mobilePlusMinuss;
    return mobilePlusMinuss;
}
// +++++++++++++++++++++++++++++++
function updetMobileTotel(plus){
    const mobileTotel=document.getElementById("mobileTk");
    const mobiletotelTk= plus * 1219;
    mobileTotel.innerText=mobiletotelTk;
  }

//   ________________________________

// +++++++++++++++
document.getElementById("mobileBtnPlass").addEventListener("click",function(){
    const plus= productPlassMinuss(true)
     
     updetMobileTotel(plus)
    //  ___________________________
    calcoletsubtotel()
    // _____________________________
    text()
   })
   
//    +++++++++++++++++++++++++++++++++++++++
   document.getElementById("mobileBtnMinus").addEventListener("click",function(){
    const  minus= productPlassMinuss(false);
    updetMobileTotel(minus);
    calcoletsubtotel()

 })