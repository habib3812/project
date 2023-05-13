const btn= document.getElementById("btn");
btn.addEventListener("click",function (){
    const input_pild= document.getElementById("input");
    // console.log(input_pild)
    const input_pild_text=input_pild.value;
    console.log(input_pild_text)

    const setHeding=document.getElementById("hedind")
    //=========================================
    const mainsection = document.getElementById("div1")
    // __________________________
    const p = document.createElement("p") 
     p.innerText=input_pild_text;
     mainsection.appendChild(p)
    //=====================================
    setHeding.innerText = input_pild_text;
    input_pild.value = ' '
})