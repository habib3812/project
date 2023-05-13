//******************************************************************** */
document.getElementById("dopisit-btn").addEventListener("click",function(){

    const depositInput= inputTextToNumber("exampleInputEmail1");
    // ____________________________________________________________
    const depositnumber= textToNumber("depositValue");
    const totelDeposit= depositnumber+depositInput;
    setelemintToNewvalue("depositValue",totelDeposit)
    
    // ________________________________________________________
    const depositTotel= textToNumber("totel-deposit");
    const depositTotelBalnce= depositTotel + depositInput;
    
    setelemintToNewvalue("totel-deposit", depositTotelBalnce);
    })
    