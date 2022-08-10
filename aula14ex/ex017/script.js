function calcular(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Favor digite um numero')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while(c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`       // mudou o value das options
            item.id = `tab${c}`       // mudou o id das options
            item.className = `tab${c}`       // mudou o class das options
            item.setAttribute('name', `tab${c}`)       // mudou o name das options

            tab.appendChild(item)
            c++
        }
    }
}