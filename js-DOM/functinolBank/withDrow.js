document.getElementById("withDrow").addEventListener("click",function(){
    const inputWithdrow = inputTextToNumber("withDrowInput exampleInputEmail1");
    const textWidrow=textToNumber("withdrow")
    const totelWithdeowBlance= inputWithdrow + textWidrow;
    setelemintToNewvalue("withdrow",totelWithdeowBlance);
    // ************************************************
    const withdrodTotel= textToNumber("totel-deposit");
    const totelwithdrowBlance=withdrodTotel-inputWithdrow;
    setelemintToNewvalue("totel-deposit",totelwithdrowBlance);
})