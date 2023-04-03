function verificaItemSelecionado(pratos, bebidas, sobremesas) {
//    alert('Você selecionou este item.');

    if ('pratos .selecionado' && 'bebidas .selecionado' && 'sobremesas .selecionado' == true) {
        // let fecharPedido = document.querySelector('botao');

        button.classList.add('habilitar-botao');
    }

}

function selecionaPrato(seletor) {
    console.log(seletor);
    
    const botaoAnterior = document.querySelector('.pratos .selecionado');

    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado');
        
    }

        const botaoAtual = document.querySelector(seletor);
        console.log(botaoAtual);

        botaoAtual.classList.add('selecionado');

    verificaItemSelecionado();
}

function selecionaBebida(seletor) {
    console.log(seletor);
    
    const botaoAnterior = document.querySelector('.bebidas .selecionado');

    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado');
        
    }

        const botaoAtual = document.querySelector(seletor);
        console.log(botaoAtual);

        botaoAtual.classList.add('selecionado');

    verificaItemSelecionado();
}

function selecionaSobremesa(seletor) {
    console.log(seletor);
    
    const botaoAnterior = document.querySelector('.sobremesas .selecionado');

    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado');
        
    }

        const botaoAtual = document.querySelector(seletor);
        console.log(botaoAtual);

        botaoAtual.classList.add('selecionado');

    verificaItemSelecionado();
}