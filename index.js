


avaliarProduto.addEventListener('click', function(e) {
    e.preventDefault()



    const nameToProduct = document.getElementById('nameToProduct').value
    const numberToProduct = document.getElementById('numberToProduct').value
    const validToProduct = document.getElementById('validToProduct').value
    //const avaliarProduto = document.getElementById('avaliarProduto')
   // const pv = document.getElementById('pv')

    if(validToProduct <= '12/12/2024' && validToProduct >= '12/12/2022') {

        const pve = document.getElementById('pve')
        const produto = document.createElement('li')
        produto.Id = 'produto-' + numberToProduct
        //produtosValidos.push({nameToProduct,numberToProduct,validToProduct})
        produto.innerText = 'nome do produto: ' + nameToProduct + '/ Código do produto: ' +  numberToProduct + 
        

        pve.append(produto)
        document.getElementById('nameToProduct').value = ""
        document.getElementById('numberToProduct').value = ""
        document.getElementById('validToProduct').value = ""

    } else {
        const pv = document.getElementById('pv')
        const produto = document.createElement('li')
        produto.Id = 'produto-' + numberToProduct
        produto.innerText = 'Nome do produto: ' + nameToProduct + ' / Código do produto: ' + numberToProduct + 
        
        //produtosVencidos.push({nameToProduct,numberToProduct,validToProduct})
        pv.append(produto)
        document.getElementById('nameToProduct').value = ""
        document.getElementById('numberToProduct').value = ""
        document.getElementById('validToProduct').value = ""

    }

    //console.log(produtosValidos)
    //console.log(produtosVencidos)
})



