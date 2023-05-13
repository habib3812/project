
// *************** ************************************
//1 step____________________________

const mainContener= document.getElementById("minsSection");
//2nd stap____________________
const section= document.createElement("section");
// ________________class____________
section.classList.add("section")
//3rd stap_______________________
   const h1 = document.createElement("h1");
   h1.innerText=" ned section";
   section.appendChild(h1);
//4rd stap_______________________
const ul = document.createElement("ul");
// ________________________________
const li1 = document.createElement("li");
li1.innerText="li-1 hi li";
ul.appendChild(li1);
// ________________________________
const li2 = document.createElement("li");
li2.innerText="li-1 hi li";
ul.appendChild(li2);
// ________________________________
const li3 = document.createElement("li");
li3.innerText="li-1 hi li";
ul.appendChild(li3);
//__________________________
section.appendChild(ul)
   //_____________________
   mainContener.appendChild(section);
   // **********************************************

    
