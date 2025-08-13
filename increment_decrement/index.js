const increaseBtn =document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn =document.getElementById("decrease");
const countlabel =document.getElementById("labelcount");

let count =0;

increaseBtn.onclick=function(){
  count++;
  countlabel.textContent=count;
}

resetBtn.onclick=function(){
  count=0;
  countlabel.textContent=count;
}

decreaseBtn.onclick=function(){
  count--;
  countlabel.textContent=count;
}