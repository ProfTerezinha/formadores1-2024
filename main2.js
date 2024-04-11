const dataAtual = new Date();
let dataObjetivo = prompt("Data final AAAA-MM-DD");
dataObjetivo = new Date(dataObjetivo + "T23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 8640000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam;