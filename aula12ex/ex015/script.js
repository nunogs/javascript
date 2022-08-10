function calcular(){
    var fano = window.document.getElementById('txtano').value
    var res = window.document.getElementById('res')
    var data = new Date()
    var anoatual = data.getFullYear()
    if(fano.length ==0 || fano > anoatual){
        alert('Verifique os dados digitados e tente novamente')
    }else{
        var genero = ' '
        var fsex = document.getElementsByName('radsex')
        var idade = (Number(anoatual) - Number(fano))
        if(fsex[0].checked ){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}

//   res.setAttribute ('id', 'foto')