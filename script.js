/*
  Desafio 01

  Solicitar ao usuário que insira dois números, e a partir daí, calcular a soma, subtração, multiplicação, divisão e o resto dos dois números. 
  
  Também é necessário verificar se a soma dos dois números é par ou ímpar, e também verificar se os dois números inseridos são iguais ou diferentes.
*/

/*
  Desafio 02

  Criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  -- nome;
  -- nota da primeira prova;
  -- nota da segunda prova;

  Depois de criada a lista:

  Criar uma função que irá calcular a média das notas de cada aluno;

  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
let challenge

while (challenge !== 3) {
  challenge =
    +prompt(`Bem vindo ao meu repositório de desafios (Explorer - Stage 04), selecione o desafio que deseja ver:

    1: 'Operações matemáticas e condicionais';
    2: 'Lista de estudantes, estruturas de repetições, funções e mais'.
    3: Para encerrar a aplicação.
  `)

  switch (challenge) {
    case 1:
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

      break
    case 2:
      const students = [
        {
          name: 'João Guilherme',
          firstTestGrade: 5,
          secondTestGrade: 5
        },

        {
          name: 'Mayk Brito',
          firstTestGrade: 8,
          secondTestGrade: 9
        },

        {
          name: 'Luci de Souza',
          firstTestGrade: 10,
          secondTestGrade: 10
        },

        {
          name: 'Leonardo Henrique',
          firstTestGrade: 7,
          secondTestGrade: 9
        }
      ]

      const average = 7

      function calcAverage(firstTestGrade, secondTestGrade) {
        return (firstTestGrade + secondTestGrade) / 2
      }

      function showTestResult(student) {
        const grade = calcAverage(
          student.firstTestGrade,
          student.secondTestGrade
        )
        const result = `A média do(a) aluno(a) ${student.name} é: ${grade}`

        if (grade >= average) {
          return `${result} \n\nParabéns ${student.name}! Você foi aprovado(a) para o concurso.`
        } else {
          return `${result} \n\nNão foi dessa vez ${student.name}! Estude mais para a próxima.`
        }
      }

      for (student of students) {
        const message = showTestResult(student)
        alert(message)
      }

      break
    case 3:
      alert('Encerrando a aplicação...')
      break
    default:
      alert('Por favor, insira uma opção válida!')
  }
}
