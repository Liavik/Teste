function tabuada() {
    let num = document.getElementById('txtN')
    let tab = document.getElementById('selTab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            //FAZENDO A CONTA DA TABUADA
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            tab.style.display = 'block'
            c++
        }
    }
}