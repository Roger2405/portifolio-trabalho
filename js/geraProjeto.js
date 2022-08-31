import {adicionarClasses} from "./funcoesComuns.js";
import {spanMensagemDeErro} from "./funcoesComuns.js";
//import projetosJson from '../projetos.json' assert { type: "json" }; //não houve compatibilidade em todos os navegadores testados;

//requisitando o arquivo JSON e armazenando-o na variável projetosJson quando receber a resposta;
var projetosJson = await fetch("../files/projetos.json")
.then((resposta) => resposta.status == 200 && (projetosJson = resposta.json()))

const secaoProjetos = document.querySelector('.projetos'); //elemento pai de todos os projetos

//verifica se a variável está preenchida;
if(projetosJson) {
    //itera por todos os projetos do arquivo JSON e chama a função "montarProjeto" passando todos os dados necessários
    projetosJson.forEach(projeto => {
        montarProjeto(projeto.nome, projeto.url, projeto.iconeSrc, projeto.tipo);
    });
}
//se a variável não estiver preenchida, é executado o else, o qual adiciona uma mensagem de erro à secaoProjetos;
else {
    secaoProjetos.appendChild(spanMensagemDeErro());
}


function montarProjeto(nome, url, iconeUrl, tipo) {
    
    //criando os elementos HTML e os salvando em constantes para manipulá-los;
    const divProjeto = document.createElement('a');//elemento pai
    const tituloProjeto = document.createElement('h2');
    const iconeProjeto = document.createElement('img');
    const spanAnimacao = document.createElement('span'); //elemento para animação
    
    //operador ternário para decidir a cor de fundo baseada no tipo do projeto (site ou jogo)
    
    
    divProjeto.href = url;
    divProjeto.target = '_blank';
    
    
    //alterando título e ícone do projeto.
    tituloProjeto.textContent = nome;
    
    iconeProjeto.src = iconeUrl;
    iconeProjeto.alt = `Ícone do Projeto ${nome}`;
    
    let corFundo = tipo=="site" ? 'bg-primary' : 'bg-secondary';//alterando classe (a ser adicionada posteriormente) com um operador ternário;
    
    //adicionando classes utilizando uma função do arquivo "funcoesComuns.js";
    adicionarClasses(tituloProjeto, 'projeto__nome text-light');
    adicionarClasses(iconeProjeto, 'projeto__icone');
    adicionarClasses(spanAnimacao, 'bg-dark');
    adicionarClasses(divProjeto, `projeto ${corFundo} projeto__link`); //utilizando uma função para facilitar a adição de classes (próprias e do bootstrap) no elemento
    
    
    const listaDeElementosFilho = [iconeProjeto, spanAnimacao, tituloProjeto];
    //faz o "appendChild" no elemento pai para cada elemento criado;
    listaDeElementosFilho.forEach(elemento => {
        divProjeto.appendChild(elemento);
    });
    
    secaoProjetos.appendChild(divProjeto);
}
