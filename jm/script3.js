let peso = parseFloat(prompt("Digite seu peso(kg);"))
let altura = parseFloat(prompt(" Diite sua altura(m)"))
let IMC = calcularIMC(peso, altura)
classificarIMC(IMC)


function calcularIMC(peso, altura){
   return peso/ (altura*altura)
}

function classificarIMC(imc){
    if(imc>=40){
        alert("obesidade grau 3")
    }
    else if(imc>35&& imc<39,9){
        alert("obesidade grau 2" )
    }
    else if(imc>30&& imc<34,9){
        alert("obesdade grau 1")
    }
    else if(imc>25&& imc<29,9){
        alert("sobrepeso")
    }
    else if(imc>18,5&& imc<24,5){
        alert("peso adequado")
    }
    else if(imc<18,5){
        alert( "abaixo do peso")
    }
}
function gerarrelatório(peso, altura){
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)
}
