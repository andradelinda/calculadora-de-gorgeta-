let conta = 0
let pessoas = 0
let Porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()

}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input",receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

   if(evento.target.value === "0") {
     paragrafoErro.style.display = "block"
     divErro.setAttribute("id", "erro-div")
   } else {
    paragrafoErro.style.display = "none"
    divErro.setAttribute("id", "")
    pessoas = Number(evento.target.value)
   }

   calcular()
 }

 const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='number']")
 botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao)
 })

 function receberPorcentagemBotao(evento) {  
    botoesGorjeta.forEach(botao =>  {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    }) 

   if(evento.target.value !== "")  {  
      Porcentagem= parseFloat(evento.target.value) / 100 
   } else {
    
    Porcentagem = 0
   }
   
   calcular()
 }

 const gorjetaInput = document.querySelector("#outra")
 gorjetaInput.addEventListener("input", receberPorcentagemBotao)
    
function calcular () {
    if(conta !== 0 && Porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * Porcentagem / pessoas).toFixed(2)}`

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = `R$ ${((conta + (conta * Porcentagem)) / pessoas).toFixed(2) }`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar () {
    containput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"
    


}