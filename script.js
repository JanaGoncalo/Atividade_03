/*Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/

let ladoa, ladob, ladoc, resultado

function triangulo(a, b, c) {
  a = parseFloat(document.form.ladoa.value)
  b = parseFloat(document.form.ladob.value)
  c = parseFloat(document.form.ladoc.value)

  if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
      resultado = 'Equilátero'
    } else {
      if (a == b || a == c || c == b) {
        resultado = 'Isósceles'
      } else {
        resultado = 'Escaleno'
      }
    }
  } else {
    resultado = 'Não forma um triângulo!'
  }
  document.form.saida.value = resultado
}

/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*/

Formula = () => {
  const A = document.getElementById('A')
  const B = document.getElementById('B')
  const C = document.getElementById('C')
  const result = document.getElementById('result')
  result.innerHTML = ''

  Bhaskara = (ax2, bx, c) => {
    let delta = bx * bx - 4 * ax2 * c

    if (delta < 0) {
      return (result.innerHTML = `Delta é negativo: ${delta}`)
    }

    let raiz = Math.sqrt(delta)

    let x1 = (-bx + raiz) / (2 * ax2)
    let x2 = (-bx - raiz) / (2 * ax2)

    let bhaskara = [x1, x2]
    return (result.innerHTML = `O valor de x1 e x2 são respectivamente : ${bhaskara}`)
  }
  Bhaskara(A.value, B.value, C.value)
}

/*Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. 
*/

Consultar = () => {
  const Nota = document.getElementById('Nota')
  const resul = document.getElementById('resul')
  resul.innerHTML = ''

  if (Nota.value > 100 || Nota.value < 0) {
    return alert('Insira a nota entre 0 e 100')
  }

  //   logica das notas
  if (Nota.value < 38) {
    return (resul.innerHTML = `Reprovado! 😢`)
  }
  if (Nota.value % 5 == 0) {
    resul.innerHTML = `Aprovado!🥳`
  } else if ((parseInt(Nota.value) + 1) % 5 == 0) {
    resul.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) + 1
    }`
  } else if ((parseInt(Nota.value) + 2) % 5 == 0) {
    resul.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) + 2
    }`
  } else if ((parseInt(Nota.value) - 2) % 5 == 0) {
    resul.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) - 2
    }`
  } else if ((parseInt(Nota.value) - 1) % 5 == 0) {
    resul.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) - 1
    }`
  }
}

/* Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:

Entrada:
45

Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.
 */

let tamanhoArray = document.getElementById('tamanhoArray')
let btnFormar = document.getElementById('contArray')
let resposta = document.getElementById('resposta')
let luidyArray = []
let tamanho = Number.parseInt(tamanhoArray.value)

btnFormar.onclick = () => contArray(tamanhoArray.value)

function contArray(tamanho) {
  luidyArray.splice(0, luidyArray.length)

  for (i = 1; i <= tamanho; i++) {
    if (i % 5 == 0 && i % 9 == 0) {
      luidyArray[i - 1] = 'LuidyMoura'
    } else if (i % 5 == 0) {
      luidyArray[i - 1] = 'Luidy'
    } else if (i % 9 == 0) {
      luidyArray[i - 1] = 'Moura'
    } else {
      luidyArray[i - 1] = i
    }
  }
  resposta.innerText = luidyArray
}
