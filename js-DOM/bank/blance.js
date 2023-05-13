document.getElementById("dopisit-btn").addEventListener('click',function(){
    const depositInout= document.getElementById("exampleInputEmail1");
    const depositInoutBalue= depositInout.value;
    const  depositInoutBalueNumber=parseFloat( depositInoutBalue);

    depositInout.value= " "

    // *********************************

    if(isNaN(depositInoutBalueNumber)){
           return;
    }
    //*************************************** */
    const depositValue= document.getElementById("depositValue");
    const depositBalue= depositValue.innerText;
    const  depositNumber=parseFloat( depositBalue);
    // console.log(depositNumber)

    // *************************************************
    const totelDeposit=depositNumber + depositInoutBalueNumber;
    depositValue.innerText=totelDeposit;
    // ************************************************
    const totelDepositValue= document.getElementById("totel-deposit");
    const depositTotelBalueText= totelDepositValue.innerText;
    const  depositTotelNumber=parseFloat( depositTotelBalueText);
    // ______________________________________________________
    const totelDEpositBalence= depositTotelNumber + depositInoutBalueNumber;

    totelDepositValue.innerText=totelDEpositBalence;

    
})
     