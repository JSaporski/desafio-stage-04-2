/*
  Desafio 01

  Solicitar ao usuário que insira dois números, e a partir daí, calcular a soma, subtração, multiplicação, divisão e o resto dos dois números. 
  
  Também é necessário verificar se a soma dos dois números é par ou ímpar, e também verificar se os dois números inseridos são iguais ou diferentes.
*/

const firstNum = +prompt('Digite o primeiro número')
const secondNum = +prompt('Digite o segundo número')

const addition = firstNum + secondNum
const subtract = firstNum - secondNum
const multiply = firstNum * secondNum
const division = firstNum / secondNum
const remaind = firstNum % secondNum

const isEven = addition % 2 === 0
const isEqual = firstNum === secondNum

alert(`A soma dos dois números é ${addition}.`)
alert(`A subtração dos dois números é ${subtract}.`)
alert(`A multiplicação dos dois números é ${multiply}.`)
alert(`A divisão dos dois números é ${division}.`)
alert(`O resto da divisão dos dois números é ${remaind}.`)

if (isEven) {
  alert(`A soma dos dois números é par: ${addition}`)
} else {
  alert(`A soma dos dois números é ímpar: ${addition}`)
}

if (isEqual) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
}
