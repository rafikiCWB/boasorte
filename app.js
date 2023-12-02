var nomes = [];

document.getElementById('adicionarBtn').onclick = function () {
    var nomeInput = document.getElementById('nomeInput')
    if (nomeInput.value) {
        nomes.push(nomeInput.value)
        var nomeLista = document.getElementById('nomeLista')
        var nomeItem = document.createElement('li')
        nomeItem.textContent = nomeInput.value
        nomeLista.appendChild(nomeItem)
        nomeInput.value = ""
    } else {
        alert("Por favor, digite um nome válido")
    }
}
document.getElementById('sorteioBtn').onclick = function () {
    if (nomes.length > 0) {
        var nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)]
        document.getElementById('resultado').textContent = nomeSorteado
    } else {
        alert("Por favor, adicione alguns nomes primeiro!")
    }
}
