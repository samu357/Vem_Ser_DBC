var T1 = parseFloat(prompt('Digite a primeira nota : '))
var T2 = parseFloat(prompt('Digite a segunda nota : '))
var P1 = parseFloat(prompt('Digite a nota da prova : '))

var media = parseFloat(T1 + T2 + P1) / 3

if (
  T1.toString() !== 'NaN' &&
  typeof T1 === 'number' &&
  T2.toString() !== 'NaN' &&
  typeof T2 === 'number' &&
  P1.toString() !== 'NaN' &&
  typeof P1 === 'number'
) {
} else {
  alert('Digite as notas corretas')
}

alert(`sua nota é ${media}`)

if (media < 5) {
  alert('Você está Reprovado')
} else if (media > 5 && media < 7) {
  alert('Você está de Recupeação')
} else {
  alert('Parabens, você esta aprovado')
}
