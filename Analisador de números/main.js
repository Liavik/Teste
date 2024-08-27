let numero = document.getElementById('txtN')
let lista = []
let tabela = document.getElementById('selTab')
let dis = document.getElementById('disTab')
let resultado = document.getElementById('res')

//VALIDAÇÃO DO NUMERO ENTRE 1 E 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//VALIDAÇÃO DE NÃO REPETE NA TABELA
function inTabela(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    //VALIDAÇÃO DOS DADOS
    if (isNumero(numero.value) && !inTabela(numero.value, lista)) {
        
        //APARECER E INSERIR NA TABELA
        dis.style.display = 'block'
        lista.push(Number(numero.value))
        let inserir = document.createElement('option')
        inserir.text = `Valor ${numero.value} adicionado`
        tabela.appendChild(inserir)
        resultado.innerHTML = ''

    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

    numero.value = ''
    numero.focus()
}

function finalizar() {
    let total = lista.length
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0

    //TESTE LOGICOS
    for (let a in lista) {
        soma += lista[a]

        if (lista[a] > maior)
            maior = lista[a]
        if (lista[a] < menor)
            menor = lista[a]
    }
    media = soma / total

    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

}