// var hours=72;


// function hourToMinits(hour){
//     var minuts= hour*60;
//     return minuts;
// }

// var minuts =hourToMinits(hours);
// console.log( hours,"hours = ", minuts," minuts");



// *************************************************************************


var year= [2022, 2023, 2024, 2025, 2026, 2028, 2030,2031];

function yearInput(year){
var lipeYear=[];
for(var i=0; i < year.length; i++){
    // console.log(i)
    var index=i;
    var eliments= year[index];
    // console.log(eliments);
 if ((0 == eliments % 4) && (0 != eliments % 100) || (0 == eliments % 400)) {
    lipeYear.push(eliments)

} 

}
return lipeYear;
}

var arrayLipyear= yearInput(year);
console.log(arrayLipyear)