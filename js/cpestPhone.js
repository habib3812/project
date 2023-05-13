const phons=[
    {name:"nokia",camra:8, pricr:10000, color:"black",},
    {name:"redmi",  camra:16,  pricr:20000, color:"red",},
    {name:"oppo",  camra:16,  pricr:18000, color:"black",},
    {name:"samsung ",  camra:32,  pricr:6000, color:"red",},
    {name:"samphoni",  camra:4,  pricr:500, color:"golden",}
];
 

function scarchSostaPhone(phons){
    //___________________
let sostaPhone= phons[0];
// _______________________
// console.log(sostaPhone);
    for( var i=0; i<phons.length;i++){
        const index=i;
        const elements= phons[index];
        // console.log(elements)
        if ( elements.pricr < sostaPhone.pricr ){
            sostaPhone= elements;
        }
    }
    return sostaPhone;
   
}
const phonb= scarchSostaPhone(phons)
console.log(phonb);