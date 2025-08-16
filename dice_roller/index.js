
function rolldice(){
  const numofdice =document.getElementById("numofdice").value;
  const result =document.getElementById("ans");
  const image = document.getElementById("image");
  const values=[];
  const img=[];
  for (let i=0; i<numofdice; i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    img.push(`<img src="images/${value}.jpg">`);
  }
  result.textContent=`Your answers are ${values.join(", ")}`;
  image.innerHTML=img.join(" ");
}