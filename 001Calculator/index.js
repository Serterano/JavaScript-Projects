//choose number whatever you want and add your expression using buttons
//after then u can execute the query.
//<p id="choosen">
let choosens = document.getElementById("choosen");
//<p id="resultParagraph">
let resultParagraph = document.getElementById("resultParagraph");
//we just need 1 input element <input type=number id="var-el">
let num = document.getElementById("var-el");

let query ="";

//all functions should be assigned to buttons as onclick
//<button onclick="getNumber">Choose As A Number</button>
function getNumber(){
    choosens.textContent += num.value+"";
    num.value="";
}
function substract(){
    choosens.textContent += "-";
}
function add(){
    choosens.textContent += "+";
}
function divide(){
    choosens.textContent += "/";
}
function multiply(){
    choosens.textContent += "*";
}
function execute(){
    query = choosens.textContent;
    let result = eval(query);
    // eval(math query) -> 5+4-6*4

    resultParagraph.textContent += ""+result;
    
}
