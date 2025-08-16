//generate passwords

function generatePass(passlength, hasuppercase, haslowercase,hassymbols,hasnumbers){
  const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
  const lowercase ="qwertyuiopasdfghjklxzcvbnm";
  const symbols ="!@#$%^&*()_:";
  const numbers="1234567890";

  let  allowedpass="";
  let pass ="";
  allowedpass+= hasuppercase ?uppercase:"";
  allowedpass+=haslowercase ?lowercase:"";
  allowedpass+=hassymbols ?symbols:"";
  allowedpass+=hasnumbers ?numbers:"";

  if(passlength<=5){
    return `Password length must be atleast 5`
  }
  if(allowedpass.length===0){
    return `(Atleast one set of characters must be selected )`
  }
  for(let i=0; i<passlength; i++){
    const randomIndex =Math.floor(Math.random()*allowedpass.length)+1;
    pass += allowedpass[randomIndex];
  }

  return pass;

}
const passlength = 12;
const hasuppercase = true;
const haslowercase =true;
const hassymbols = true;
const hasnumbers =true;

const password=generatePass(passlength, hasuppercase, haslowercase,haslowercase,hassymbols,hasnumbers);
console.log(`The generated password is: ${password}`);