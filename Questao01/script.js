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
