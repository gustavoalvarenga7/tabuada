function calcular(){    
    var num1 = document.getElementById('txtnum')
    var num = Number(num1.value)
    var tab = document.getElementById('seltab')
    tab.innerHTML = ' '
    if (num1.value.length==0){
        alert('Por favor, insira um número.')
        tab.innerHTML = ' '
    } else {
        for (let c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }   
    }

}
