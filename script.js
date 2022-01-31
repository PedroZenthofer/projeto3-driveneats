
let suaComida,suaSobremesa, suaBebida = null;
let precoComida, precoBebida, precoSobremesa, precoTotal= 0; 


function ativarBotao(){
   const botao = document.querySelector(".botaoselecionar");
       if(suaComida!=null && suaBebida!=null && suaSobremesa !=null){
           botao.classList.remove("botaoselecionar");
           botao.classList.add("botaoativo");
           botao.innerHTML = "Fechar pedido";
       }
    
}

function escolherPrato(botao, nomeExibicao){
    const selecionado = document.querySelector(".caixa_pratos .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    suaComida = nomeExibicao;
    
    //definir o preço do prato 
    if(suaComida === "Frango"){
        precoComida = 14.90;
    }else if(suaComida === "Lasanha"){
        precoComida = 15.90;
    }else{
        precoComida = 17.90;
    }
    ativarBotao();
}


function escolherBebida(botao,nomeExibicao){
    const selecionado = document.querySelector(".caixa_bebidas .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    suaBebida = nomeExibicao;
    
    //definir o preço da bebida
    if(suaBebida === "Coca cola"){
        precoBebida = 4.90;
    }else if(suaBebida === "suco"){
        precoBebida = 6.90;
    }else{
        precoBebida = 3.90;
    }
    ativarBotao();
}


function escolherSobremesa(botao, nomeExibicao){
    const selecionado = document.querySelector(".caixa_sobremesas .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    suaSobremesa = nomeExibicao;
    
    //definir o preço da sobremesa
    if(suaSobremesa === "Pudim"){
        precoSobremesa = 7.90;
    }else if(suaSobremesa === "Pudim seco"){
        precoSobremesa = 5.90;
    }else{
        precoSobremesa = 6.90;
    }
    ativarBotao();
}


function enviarPedido(){
    if (precoComida != 0 && precoBebida != 0 && precoSobremesa != 0){
        precoTotal = precoComida + precoBebida + precoSobremesa;
        precoTotal = precoTotal.toFixed(2);
        let nomeUsuario = prompt("Qual o seu nome?");
        let endereco = prompt("qual o seu endereço?")
        let mensagemWhats= `Olá, gostaria de fazer o pedido:\n- Prato: ${suaComida}\n- Bebida: ${suaBebida}\n- Sobremesa: ${suaSobremesa}\nTotal: R$ ${precoTotal}\n \n Nome: ${nomeUsuario}\n Endereço: ${endereco}`;
        window.open(`https://wa.me/5515997901464?text=${encodeURIComponent(mensagemWhats)}`);
    }
}