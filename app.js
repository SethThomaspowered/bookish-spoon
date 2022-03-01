console.log("Hello Mars!");
const roverList = document.getElementById("rover");

const rovers = ["Sojourner", "Spirit", "Opportunity", "Curiosity", "Perseverance"];
const addElement=(el)=> {for (i in rovers){
    const li =document.createElement("li");
    li.appendChild(document.createTextNode(rovers[i]));
    el.appendChild(li);

}}
addElement(roverList);