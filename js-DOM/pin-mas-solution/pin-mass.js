//  ()
function fourDEgitPin(){
    const pin= random();
    const pinFurDisitSting=pin+'';
    if(pinFurDisitSting.length===4){
        return pin;

    }
    else{  
       return fourDEgitPin();
       
    }
   
} 

function random(){
    const random =Math.round(Math.random()*10000);
    return random;
    // console.log(random)
} 


document.getElementById("generatePin").addEventListener("click",function(){
   const randomNumver= fourDEgitPin()
      const inputRandom= document.getElementById("randomInput");
      inputRandom.value=randomNumver;

})

// =====================================================================

document.getElementById("number").addEventListener("click",function(evint){
const number = evint.target.innerText;
const displayInput= document.getElementById("calcolet");
const Inputvalue=displayInput.value;
if(isNaN(number)){
           if(number==='C'){

           displayInput.value= " ";
            }
           else if(number==='<'){
            const digitArray=Inputvalue.split('');
            digitArray.pop();
          const  desitjoin= digitArray.join('');
            displayInput.value=desitjoin;
           }
    }
else{
  
    const prevusValue =Inputvalue + number;
    displayInput.value =prevusValue;
}
});



// ++++++++++++++++++++++++++++++++++++
document.getElementById("SubmitBTN").addEventListener("click",function(){
//    console.log("random")

const calcoleter =document.getElementById("calcolet");
const calcoleterNumber=calcoleter.value;

const rendom =document.getElementById("randomInput");
const rendomNumber=rendom.value;
// ______________________________________________________
const masigefail= document.getElementById("masigefail");
const masigeSuscss= document.getElementById("masigeSuscss");
    if(calcoleterNumber === rendomNumber){

     masigeSuscss.style.display= "block";
     masigefail.style.display= "none";
    //  calcoleter.value= " ";
    //     rendom.value= " ";
     }
    else{  
      
        masigefail.style.display= "block";
        masigeSuscss.style.display= "none";
    //     calcoleter.value= " ";
    //     rendom.value= " ";
     }

 })