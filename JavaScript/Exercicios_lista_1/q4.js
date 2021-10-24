var num_1 = prompt('digite um numero : ')
var num_2 = prompt('digite um numero : ')
var operacao = prompt(
  'Informe a operação que deseja realizar: Adição(+), subtração(-), multiplicação(*) ou divisaõ(/)'
)
var resultado

num_1 = parseInt(num_1)
num_2 = parseInt(num_2)

if (
  typeof num_1 === 'number' &&
  num_1.toString() !== 'NaN' &&
  typeof num_2 === 'number' &&
  num_2.toString() !== 'NaN' &&
  num_2 !== 0
) {
} else {
  alert('Digite um valor válido.')
}
if (operacao === '+') {
  resultado = num_1 + num_2
} else if (operacao === '-') {
  resultado = num_1 - num_2
} else if (operacao === '*') {
  resultado = num_1 * num_2
} else if (operacao === '/') {
  resultado = num_1 / num_2
}
if (
  operacao !== '+' &&
  operacao !== '-' &&
  operacao !== '*' &&
  operacao !== '/'
) {
  alert('Digite uma operação válida.')
} else {
  alert(`O resultado é : ${resultado}`)
}
