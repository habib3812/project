// var numbers=[9,6,11, 22, 33, 4,10, 5 ,50, 7, 9];

// function sumTotelArray(number){
//     var sum =0;
// for(var i=0; i<number.length ; i++){
//     const index = i;
//     const elements= number[index];
//     // console.log(elements);
//      sum = sum + elements;
//     //  console.log(sum);
//   }
// // console.log(sum)
// return sum;
// }

// var sumTotel= sumTotelArray(numbers);
// console.log(sumTotel);

// ************************************************************


var numbers=[9,6,11, 22, 33, 4,10, 5 ,50, 7, 91];

function sumTotelArray(number){
    var oddTotel =[ ];
for(var i=0; i<number.length ; i++){
    const index = i;
    const elements= number[index];
    // console.log(elements);
    if( elements%2!==0){
        
        oddTotel.push(elements);
        // console.log(elements)
    }
  }
return oddTotel;
}

var oddTotel= sumTotelArray(numbers);
console.log(oddTotel);
