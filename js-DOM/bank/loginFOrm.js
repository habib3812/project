document.getElementById("btn").addEventListener("click", function(){
// console.log(5)
const imeilInput= document.getElementById("exampleInputEmail1");
// console.log(5)
const inputText= imeilInput.value;
// console.log(inputText)
//*********************** *
const passowrdInput= document.getElementById("exampleInputPassword1");

const passowerdText= passowrdInput.value;
// console.log(passowerdText);
// ***************************
if(inputText==="s@b.com" && passowerdText==="627426"){
    window.location.href = "index2.html";
    // alert("valid input")
    alert(" valid input")
}
else{
alert("error: inter your valid input")
}
})

