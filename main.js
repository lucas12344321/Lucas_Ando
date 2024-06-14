const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll("contador")
const tempoObjetivo1 = new Date(2024,6,25,4);
tempo[1].textContent = agora
const tempoObjetivo2 = new Date(2024,5,31);
tempo[2].textContent = "olá"
const tempoObjetivo3 = new Date(2024,6,20);
tempo[3].textContent = "olá"
const tempoObjetivo4 = new Date(2024,7,30);
tempo[4].textContent = "olá"
const agora = new Date();
console.log(tempo);
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
