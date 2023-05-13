document.getElementById("withDrow").addEventListener('click',function(){
    const withdrowInout= document.getElementById("withDrowInput exampleInputEmail1");
    // console.log(withdrowInout);
    const withdrowInputText= withdrowInout.value;
    const withdrowInoutTextBalueNumber=parseFloat(withdrowInputText);

withdrowInout.value= " " ;
if(isNaN(withdrowInoutTextBalueNumber)){
    return;
}
    //*************************************** */
    const withdrwValue= document.getElementById("withdrow");
    const withdrwValuetext=  withdrwValue.innerText;
    const  withdrwValueNumber=parseFloat( withdrwValuetext);
  
    // **********************************************
    const totelWithdrow=withdrwValueNumber + withdrowInoutTextBalueNumber;
    withdrwValue.innerText=totelWithdrow;
    // ____________________________________________________
    const withdrwTotelValue= document.getElementById("totel-deposit");
    const withdrwTotelValuetext=  withdrwTotelValue.innerText;
    const  withdrwTotelValueNumber=parseFloat( withdrwTotelValuetext);
      // _____________________________________________

      if( withdrowInoutTextBalueNumber > withdrwTotelValuetext){
        alert("tk kom")
        return;
    }
    //_____________________________________________________
    const totelWithdrowDeposit=withdrwTotelValueNumber - withdrowInoutTextBalueNumber;
    withdrwTotelValue.innerText=totelWithdrowDeposit;
    
})
     