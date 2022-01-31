
let suaComida,suaSobremesa, suaBebida = null;
let precoComida, precoBebida, precoSobremesa = 0; 


function ativarBotao(){
   const botao = document.querySelector(".botaoselecionar");
       if(precoComida!=0 && precoBebida!=0 && precoSobremesa != 0){
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
    ativarBotao()
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
        precoBebida = 14.90;
    }else if(suaBebida === "suco"){
        precoBebida = 15.90;
    }else{
        precoBebida = 17.90;
    }
    ativarBotao()
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
        precoSobremesa = 14.90;
    }else if(suaSobremesa === "suco"){
        precoSobremesa = 15.90;
    }else{
        precoSobremesa = 17.90;
    }
    ativarBotao()
}
