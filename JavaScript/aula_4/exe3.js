function text(string){
  let stringArray = string.split(' ');
  for (let i=0; i<stringArray.length; i++){
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }
  stringArray = stringArray.join(' ');
  console.log(stringArray);
}

let stringTeste = "olar tudo bem";

text(stringTeste)