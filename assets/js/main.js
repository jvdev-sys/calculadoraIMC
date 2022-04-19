const form = document.querySelector('.form')
const peso = form[0]
const altura = form[1]

peso.oninput = e => {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    resultado.style.background = '#fff'
    const erro = document.querySelector('#erroPeso')
    if(validaCampo(e.target.value) && e.target.value !== ''){
        erro.innerHTML = '*Digite o valor de peso em KG'
    }
    else{
        erro.innerHTML = "" 
    }
    
}

altura.oninput = e => {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    resultado.style.background = '#fff'
    const erro = document.querySelector('#erroAltura')
    if (validaCampo(e.target.value) && e.target.value !== '') {
        erro.innerHTML = '*Digite o valor da altura em metros'
    }
    else {
        erro.innerHTML = ""
    }
}

form.onsubmit = e => {
    e.preventDefault()
    const resultadoHTML = document.querySelector('.resultado')

    const peso = e.target[0].value
    const altura = e.target[1].value

    if (validaCampo(peso) && validaCampo(altura)){
        resultadoHTML.innerHTML = "Preencha os campos corretamente"
        resultadoHTML.style.background = colors.red
    }
    else{
        const resultadoIMC = calculaIMC(peso, altura)
        resultadoHTML.innerHTML = "Seu IMC é: " + resultadoIMC.texto
        resultadoHTML.style.background = resultadoIMC.cor
    }
}

const validaCampo = (value) => {
    const validacao = parseFloat(value)
    return isNaN(validacao)
} 

const calculaIMC = (peso, altura) => {
    peso = peso.replace(',', '.')
    altura = altura.replace(',', '.')
    const pesoCalc = parseFloat(peso)
    const alturaCalc = parseFloat(altura)
    const imc = pesoCalc / (alturaCalc ** 2)

    return resultadoTextoIMC(imc.toFixed(2))
}

const colors = {
    red: '#d63031',
    darkPink: '#B53471',
    pink: '#ED4C67',
    yellow: '#EE5A24',
    skyblue: '#1289A7',
    darkBlue: '#1B1464',
    blue: '#0652DD',
    purple: '#6F1E51',
}

const resultadoTextoIMC = (imc) => {

    if (imc >= 40) {
        return {
            texto: `${imc}: Obesidade grau III.`,
            cor: colors.red,
        }
    }

    if (imc > 35) {
        return {
            texto: `${imc}: Obesidade grau II.`,
            cor: colors.darkPink,
        }
    }

    if (imc > 30 ) {
        return {
            texto: `${imc}: Obesidade grau I.`,
            cor: colors.pink,
        }
    }

    if (imc > 25) {
        return {
            texto: `${imc}: Pré obeso.`,
            cor: colors.yellow,
        }
    }

    if (imc > 18.5) {
        return {
            texto: `${imc}: Peso normal.`,
            cor: colors.blue,
        }
    }

    if (imc > 16.5 ) {
        return {
            texto: `${imc}: Peso abaixo do normal.`,
            cor: colors.darkBlue,
        }
    }
    
    if(imc < 16.5) {
        return {
            texto: `${imc}: Peso severamente abaixo do normal.`,
            cor: colors.purple
        }
    }
    
    
    
    
    
    
}




