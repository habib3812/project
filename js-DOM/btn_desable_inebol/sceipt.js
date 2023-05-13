document.getElementById('textInputDelet').addEventListener("keyup", function(event){
    // *****************
    const deletButton= document.getElementById("btnDelet");
    // *******************
    const inputTextDeleted=event.target.value;
    // console.log(inputTextDeleted);
    if( inputTextDeleted ==="delet"){
        deletButton.removeAttribute("disabled");
    }
    else{
        deletButton.setAttribute("disabled",true);
    }

})

document.getElementById("btnDelet").addEventListener("click", function(){
    const heding= document.getElementById("displayHeding");
    heding.style.display= "none"
})
