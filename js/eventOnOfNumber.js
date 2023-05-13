const numbers=9;


function array_totelSum(number){
    var ruselt=0;
     for(let i=0; i<=number; i++){
        ruselt = ruselt + i;
     }
return ruselt;
}

const sumTotel= array_totelSum(numbers);
console.log(sumTotel);