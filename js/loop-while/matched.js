const products=[
    {name:" i phone", price: 2000, color:"black"},
    {name:"xami Phone", price: 70000, color:"rad"},
    {name:"hp laptob", price: 70000, color:"rad"},
    {name:"mackbook laptob", price: 70000, color:"rad"},
    {name:"samsung phone", price: 50000, color:"black"},
    {name:"dall Laptob", price: 20700, color:"red"},
    {name:" sumphoni phOne", price: 9000, color:"red"},
];


function matched(products,search){
    const searchRusult=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            searchRusult.push(product);
        }
    }
    console.log(searchRusult);
}

matched(products,"phone")