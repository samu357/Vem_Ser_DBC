
function order(list){
  for (let i = 0; i <= list.length; i++){
    for ( let x = 0; x <=list.length; x++){
      let maior;
      if(list[i] < list[x]){
        maior = list[x];
        list[x] = list[i];
        list[i] = maior;
      }
    }
  }
  return list;
}

let listTeste = [666,54454,232,2,5,1];

console.log(order(listTeste));