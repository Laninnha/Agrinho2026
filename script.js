function calcular() {
    const cultura = document.getElementById('cultura').value;
    const area = parseFloat(document.getElementById('area').value);
    const clima = document.getElementById('clima').value;
    const divResultado = document.getElementById('resultado');
    const resAgua = document.getElementById('res-agua');
    const resSol = document.getElementById('res-sol');

    if (!area || area <= 0) {
        alert("Por favor, insira uma área válida.");
        return;
    }

    let litrosBase = 0;
    if (cultura === "hortalica") litrosBase = 4;
    if (cultura === "milho") litrosBase = 6;
    if (cultura === "soja") litrosBase = 5;

    let multiplicadorClima = 1;
    let mensagemSol = "";

    if (clima === "ensolarado") {
        multiplicadorClima = 1.2;
        mensagemSol = "☀️ **Sol Pleno:** Alta fotossíntese detectada. Monitore a umidade do solo.";
    } else if (clima === "nublado") {
        multiplicadorClima = 0.8;
        mensagemSol = "☁️ **Nublado:** Menor perda de água por evaporação.";
    } else if (clima === "chuvoso") {
        multiplicadorClima = 0;
        mensagemSol = "🌧️ **Chuva:** Irrigação suspensa para preservar recursos hídricos.";
    }

    const totalAgua = (litrosBase * area * multiplicadorClima).toFixed(1);

    divResultado.style.display = "block";
    
    if (totalAgua > 0) {
        resAgua.innerHTML = `💧 **Irrigação:** Necessário aplicar <strong>${totalAgua} litros</strong> de água.`;
    } else {
        resAgua.innerHTML = `✅ **Sustentabilidade:** A chuva é suficiente para a cultura hoje!`;
    }

    resSol.innerHTML = mensagemSol;
}