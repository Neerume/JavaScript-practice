const number = document.getElementById("number");
const toF =document.getElementById("toF");
const toC =document.getElementById("toC");
const ans = document.getElementById("ans");

let temp;


function convert(){
  if(toF.checked){
    temp=Number(number.value);
    temp = temp *(9/5)+32;
    ans.textContent=temp.toFixed(1)+"℉";
    console.log(typeof temp);

  }
  else if(toC.checked){
    temp=Number(number.value);
    temp = (temp-32)*(5/9);
    ans.textContent=temp.toFixed(1)+"℃";

  }
  else{
    ans.textContent="Please select a unit!";
  }
}