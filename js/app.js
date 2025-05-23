//setando o site para começar corretamente
let totalGeral;
limpar();

function adicionar(){
    //recuperando o nome, quantidade e valor do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;

    //calcular o preço
    let preco = quantidadeProduto * valorProduto;

    //verificando se quantidade é válida
    if (quantidadeProduto <= 0){
        alert("Erro, Coloque uma quantidade válida!");
    }
    else{
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
   </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;

    //zerar o campo quantidade
    document.getElementById('quantidade').value = 0;
    }
}

function limpar(){
    //limpando campos
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalGeral = 0;
}