/*
function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }


} */
function tabuada(){
    var num = parseInt(document.getElementById('num').value)
    var tab = document.getElementById('seltab')
    
    if (isNaN(num)){
        alert('Por favor, digite um número!')
    } else {
        
        tab.innerHTML = ''
        var i = 1
        while (i <= 10) {
            var item = document.createElement('option')
            item.innerHTML = `${i}   x ${  num } = ${ i * num}`
            tab.appendChild(item)
            i++
        }
    }
        
}