import adicionarClasses from "./adicionarClasses.js";
//import projetosJson from '../projetos.json' assert { type: "json" }; 

//requisitando o arquivo JSON;
var projetosJson = await fetch("../projetos.json")
  .then((resposta) => projetosJson = resposta.json());

const secaoProjetos = document.querySelector('.projetos'); //elemento pai de todos os projetos

//itera por todos os projetos do arquivo JSON e chama a função "montarProjeto" passando todos os dados necessários
projetosJson.forEach(projeto => {
    montarProjeto(projeto.nome, projeto.url, projeto.iconeSrc, projeto.tipo);
});

function montarProjeto(nome, url, iconeUrl, tipo) {
    //criando o elemento pai
    const divProjeto = document.createElement('a');
    
    //operador ternário para decidir a cor de fundo baseada no tipo do projeto (site ou jogo)
    let corFundo = tipo=="site" ? 'bg-primary' : 'bg-secondary';
    adicionarClasses(divProjeto, `projeto ${corFundo} projeto__link`); //utilizando uma função para facilitar a adição de classes (próprias e do bootstrap) no elemento
    //modificando propriedades do link (tag a)
    divProjeto.href = url;
    divProjeto.target = '_blank';
    
    //criando os elementos filhos, título e ícone do projeto, também é adicionado um span para a animação.
    const tituloProjeto = document.createElement('h2');
    tituloProjeto.textContent = nome;
    adicionarClasses(tituloProjeto, 'projeto__nome text-light');
    
    const spanAnimacao = document.createElement('span');
    adicionarClasses(spanAnimacao, 'bg-dark');
    
    var iconeProjeto;
    if(iconeUrl != "") {
        iconeProjeto = document.createElement('img');
        iconeProjeto.src = iconeUrl;
        iconeProjeto.classList.add('projeto__icone');
        iconeProjeto.alt = `Ícone do Projeto ${nome}`;
    }
    const listaDeElementosFilho = [iconeProjeto, spanAnimacao, tituloProjeto];
    listaDeElementosFilho.forEach(elemento => {
        divProjeto.appendChild(elemento);
    });
    
    secaoProjetos.appendChild(divProjeto);
}
