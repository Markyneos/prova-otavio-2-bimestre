function enviarRegistros() {
    const tbody = document.querySelector("tbody");
    let nome = document.getElementById("nome").value;
    let matricula = document.getElementById("matricula").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;
    let situacao;
    const contemNumeros = /\d/.test(nome);
    if (nota1 > 10 || nota1 < 0) {
        alert("Insira um valor válido para a nota 1!");
        return;
    }
    if (nota2 > 10 || nota2 < 0) {
        alert("Insira um valor válido para a nota 2!");
        return;
    }
    if (isNaN(matricula)) {
        alert("Insira um número de matrícula válido!");
        return;
    }
    if (contemNumeros) {
        alert("O nome não deve conter números! Digite um nome válido!");
        tr.innerHTML = '';
        return;
    }
    if (media >= 5) {
        situacao = "Aprovado";
    }
    else {
        situacao = "Reprovado";
    }
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    let array = [nome, matricula, nota1, nota2, media, situacao];
    for (let i = 0; i < 6; i++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.innerText = array[i];
        if (td.innerText == array[5] && situacao == "Aprovado") {
            td.style.backgroundColor = '#07fc03';
        }
        else if (td.innerText == array[5] && situacao == "Reprovado") {
            td.style.backgroundColor = '#fc0303';
        }
    }
    console.log("Notas enviadas com sucesso! Parabéns, professor Otávio Lube! :)");
}
function apagarRegistros() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
}