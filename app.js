let valorTotal = 0;
limpar();

/*Temos dois botões na nossa página: Adicionar e Limpar.
No html estão definidos como <button onclick="adicionar()" e <button onclick="limpar()"
Iniciamos criando as funções que chamarão esses botões.
*/

function adicionar() {
//recuperar valores do formulário: nome do produto escolhido, quantidade e valor
    let produto = document.getElementById('produto').value;
    // "produto" contém o nome do produto e o valor, separados por '- R$'.
    // Separando o nome do produto do valor, para possibilitar o cálculo do preço e subtotal

    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //alert(produto.value);
    //alert(nomeProduto);
    //alert(valorProduto);
    //alert(quantidade);
    
//calcular o preço e subtotal
    let preco = quantidade * valorProduto;
    //alert(preco);

//adicionar produtos no carrinho
    let carrinho = document.getElementById('lista-produtos')
    /*temos de modificar o HTML do elemento carrinho, passando para cada produto o innerHTML, ajustando
    o código do HTML com as variáveis criadas nesse app.js. Também é necessário que se faça a concatenação
    dos produtos que foem sendo adicionados, para que ao clicar em Adicionar, o produto atual não 
    sobreponha o anterior.*/

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul"> ${valorProduto}</span>
    </section>`;

//atualizar valor total
    valorTotal = valorTotal + preco;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;

    //<p class="carrinho__total">
    //    Total: <span class="texto-azul" id="valor-total">R$1400</span>
}

function limpar() {
    document.getElementById('produto').value = '';
    carrinho = 0;
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML ='';
    document.getElementById('valor-total').textContent = 'R$ 0'
    document.getElementById('quantidade').value = 0;    
}

/*
id="produto"
id="quantidade"
id="lista-produtos"
id="valor-total"


<button onclick="adicionar()" type="button" class="botao-form botao-adicionar">Adicionar</button>
<button onclick="limpar()" type="button" class="botao-form botao-limpar">Limpar</button>

*/