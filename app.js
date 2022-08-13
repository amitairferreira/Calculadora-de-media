// Aula 01: variáveis,operações e médias.
// var nome = "Amitair"
// var notaDoPrimeiroBimestre = 9
// var notaDoSegundoBimestre = 8
// var notaDoTerceiroBimestre = 8
// var notaDoQuartoBimestre = 9

// var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

// var notaFixada = notaFinal.toFixed(1)

// console.log("Bem vindo " + nome )
// console.log(`Sua média é : ${notaFixada}`)

// Mostrar se está aprovado ou não de acordo com suas notas.

function CalcularMedia() {
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)
  var nota4 = parseFloat(document.getElementById('nota4').value)
  
  var media = (nota1 + nota2 + nota3 + nota4) / 4
  var mediaFixada = media.toFixed(1)
  
  var aprovado
  if(mediaFixada > 7) {
    aprovado = "Você está aprovado(a)!"
  } else {
    aprovado = "Você está reprovado(a)!"
  }
    
  var resultadoTela = document.getElementById('resultadoMedia')
    resultadoTela.innerHTML = " Sua média foi: " + mediaFixada + ' - ' + aprovado
  }