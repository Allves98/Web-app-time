
var key = "08fd1f02978e941c0131863104680d17"


function colocarNaTela(dados) {
  document.querySelector("h1").innerHTML ="tempo em"  + dados.name
  document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "ºc"
  
  document.querySelector(".nub").innerHTML = dados.weather[0].description
  
  document.querySelector(".umid").innerHTML = "Umidade" +  dados.main.humidity + "%"
  
  document.querySelector("img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  
  console.log(dados)
}

async function buscar(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  
  colocarNaTela(dados)
}

function clickonbutton() {
  const cidade = document.querySelector("input").value
  
  buscar(cidade)
}
