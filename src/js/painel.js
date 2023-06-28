/*
1- Quando clicar na seta para avançar temos que esconder todas as imagens
e mostrar a prócima imagem.

2- A imagem atual começa em Zero(0) pq é a primeira imagem, assim que for
clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
para poder saber que agora eu vou mostrar a segunda imagem.

    3- Esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

    4- Mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar
        a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
/*1*/
setaAvancar.addEventListener('click', function(){

    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        return;
    }
    /*2*/
    imagemAtual++;
    /*3*/
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    /*4*/
    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function(){
    
    if(imagemAtual === 0) {
        console.log('não volta mais')
        return;
    }
    
    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
});