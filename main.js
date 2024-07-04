const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
const agora = new Date();
const tempoObjetivo1 = new Date(2024,6,25,4);
tempo[0].textContent = agora
const tempoObjetivo2 = new Date(2024,5,31);
tempo[1].textContent = "olá"
const tempoObjetivo3 = new Date(2024,6,20);
tempo[2].textContent = "olá"
const tempoObjetivo4 = new Date(2024,7,30);
tempo[3].textContent = "olá"
let segundos;
let  minutos;
let horas;
let dias;
segundos = (tempoObjetivo1-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);

tempo[0].textContent = `Fallam ${dias}dias,${horas}horas,${minutos}minutos e ${segundos}segundos`
tempoObjetivo1 - agora
console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
