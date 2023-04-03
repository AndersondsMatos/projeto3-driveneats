function selecionaPrato(seletor) {
    console.log(seletor);
    
    const botaoAnterior = document.querySelector('.pratos .selecionado');

    if (botaoAnterior !== null) {
        botaoAnterior.classList.remove('selecionado');
        
    }

        const botaoAtual = document.querySelector(seletor);
        console.log(botaoAtual);

        botaoAtual.classList.add('selecionado');
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
}


//if (opcao1 && opcao2 && opcao3 == tue) {