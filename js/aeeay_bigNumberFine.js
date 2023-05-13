const numbers=[167, 190, 120, 165, 137,200];

function bigNumberFind(number){
    // ______________
    let bigNum=[0];
    // ___________________
    for(let i=0; i<number.length; i++){
        const index=i;
        // console.log(index)
        const elements= number[index];
        // console.log(elements)
        // __________________________________
              if(bigNum < elements){
                bigNum=elements;
              }
         // __________________________________
    }
return bigNum;
}


let bignumber = bigNumberFind(numbers);

console.log(bignumber)