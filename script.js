let firstNumber = prompt('Digite o primeiro número: ')
let secundNumber = prompt('Digite o sengundo número: ')

firstNumber = Number(firstNumber)
secundNumber = Number(secundNumber)

const sum = firstNumber + secundNumber
const sub = firstNumber - secundNumber
const mult = firstNumber * secundNumber
const div = firstNumber / secundNumber
const restDiv = firstNumber % secundNumber

alert ('A soma dos dois números é: ' + sum)
alert ('A subtração dos dois números é: ' + sub)
alert ('A multiplicação dos dois números é: ' + mult)
alert ('A divisão dos dois números é: ' + (div.toFixed(2)))
alert ('O resto da divisão dos dois números é: ' + (restDiv.toFixed(2)))

if (firstNumber == secundNumber) {
  alert('Os dois números são iguais')
}else {
  alert('Os dois números são diferentes')
}

if (sum % 2 == 0) {
  alert('A suma dos dois números é PAR!')
}else {
  alert('A soma dos dois números é impar')
}

