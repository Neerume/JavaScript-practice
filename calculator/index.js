const show= document.getElementById("display");

function display(input){
  show.value+=input;
}

function clearDisplay(){
  show.value="";
}
function calculate(){
  try{
      show.value = eval(show.value);

  }
  catch(error){
    show.value ="Error";
  }
}