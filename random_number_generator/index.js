let btn =document.getElementById("rollbtn");
let lbl1 =document.getElementById("ans");
let onroll;

let max=6;
let min=1;

btn.onclick=function(){
  onroll=Math.floor(Math.random()*max)+min;
  lbl1.textContent=onroll;
}
document.getElementById("ans").textContent=``