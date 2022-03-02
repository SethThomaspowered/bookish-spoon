console.log("Hello Mars!");
const roverList = document.getElementById("rover");

const rovers = ["Sojourner", "Spirit", "Opportunity", "Curiosity", "Perseverance"];
const addElement=(el)=> {for (i in rovers){
    const li =document.createElement("li");
    li.appendChild(document.createTextNode(rovers[i]));
    el.appendChild(li);

}}
addElement(roverList);
const xValues = [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
const marsRoverChart = new Chart("Rovers on Mars", {
    type: "line",
    data: {},
    options: {}
  });