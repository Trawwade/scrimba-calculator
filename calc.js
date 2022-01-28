let num1= 5
let num2 = 4;
 document.querySelector("#num1-el").innerHTML = num1;
 document.querySelector("#num2-el").innerHTML = num2;
 let add = document.querySelector("#add-btn");
 let sub = document.querySelector("#sub-btn");
 let mul = document.querySelector("#mul-btn");
 let div = document.querySelector("#div-btn");
  let res = document.querySelector("#result");
 add.onclick=sum
 mul.onclick=multiply
 div.onclick=divide
 sub.onclick=subtract
function sum(){
let sum = "sum: "+ (num1+num2)
res.innerHTML=sum



    
}
function divide(){
    let div = "division: "+ (num1/num2)
res.innerHTML=div

}
function multiply(){
    let mul = "multiplication: "+ (num1*num2)
res.innerHTML=mul


}
function subtract(){
    let sub = "subtraction: "+ (num1-num2)
res.innerHTML=sub


}