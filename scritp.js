


const key = "8f313a6233dca529e29c0d8decb64f5c"

function colocarDados(dados){
  console.log(dados)
  document.querySelector(".cidade").innerHTML = dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade " + "  " + dados.main.humidity + "%" 
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}

async function buscarCidade(input){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

  colocarDados(dados)
}



function cliqueiNoBotao(){
  const input = document.querySelector(".input-cidade").value

 buscarCidade(input)
}
