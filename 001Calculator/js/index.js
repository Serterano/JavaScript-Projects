let choosens = document.getElementById("choosen");
let resultParagraph = document.getElementById("resultParagraph");
let num = document.getElementById("var-el");
//choose number whatever you want and add your expression using buttons
//after then u can execute the query.
let query ="";

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