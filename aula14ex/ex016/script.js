var res = window.document.getElementById('res')
function conte(){
    res.innerHTML = ' '
    let inicio = Number(document.getElementById('ini').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)


    if(inicio.length == 0 ||fim.length == 0 || passo.length == 0  ){
        alert('ERRO! Complete os campos antes de proceguir.')
    }else{
        if(inicio < fim){
            for(let c = inicio; c <= fim ; c += passo){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else if(inicio == fim){
            alert('O inicio é identico ao fim. não precisa contar.')
        }else if(inicio > fim){
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
    }
    res.innerHTML += `\u{1F3C1} `
}
        
        

function limpe(){
    res.innerHTML = 'Digite as informações para contar'
}