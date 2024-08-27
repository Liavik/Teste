function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtAno')
    let res = document.querySelector('div#res')
    
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    
    } else {
        let formSex = document.getElementsByName('radSex')
        let idade = ano - Number(formAno.value)
        let genero = ''
        let img = document.createElement('img')
        
        img.setAttribute('id', 'foto')
        
        //VALIDANDO E ACRESENTANDO CONTEUDO
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','Menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','Garoto.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','Adulto.jpg')
            }else {
                img.setAttribute('src','Idoso.jpg')
            }
        
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','Menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','Garota.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','Adulta.jpg')
            }else {
                img.setAttribute('src','Idosa.jpg')
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}