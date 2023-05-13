var steing= "md habibur rahman"

// revers

function stringRevas(sting){
    var revas= '  ';
    // for( var i=0; i<sting.length; i++)
    for( var i=sting.length-1; i>=0; i--){
        //    console.log(i);
        const index=i;
        const eliments= sting[index];
         revas =revas + eliments;
console.log(eliments,index,revas)
    }

    return revas;
}

 var stringRevurs = stringRevas(steing);
 console.log(stringRevurs);