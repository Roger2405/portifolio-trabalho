import adicionarClasses from "./adicionarClasses.js";

const secaoIdiomas = document.querySelector('.idiomas');
const secaoAcademicas = document.querySelector('.academicas');

var formacoesJson = await fetch("../formacoes.json")
  .then((resposta) => formacoesJson = resposta.json());

formacoesJson.forEach(formacao => {
    montaFormacao(formacao);
});

function montaFormacao({nome, concluido, instituicao, periodo, tipo} = typeof formacoesJson[0]) {
    const divFormacao = document.createElement('div');
    const elementoTitulo = document.createElement('h3');
    const elementoStatus = document.createElement('span');
    const elementoInstituicao = document.createElement('p');
    const elementoPeriodo = document.createElement('p');

    const listaDeElementosFilho = [elementoTitulo, elementoStatus, elementoInstituicao, elementoPeriodo];
    
    listaDeElementosFilho.forEach(elemento => {
        divFormacao.appendChild(elemento);
    });
    
    console.log(tipo);
    if(tipo == "academica") {
        secaoAcademicas.appendChild(divFormacao);
    }
    else if(tipo == "idioma") {
        secaoIdiomas.appendChild(divFormacao);
    }

    adicionarClasses(divFormacao, "formacao bg-primary text-light rounded mt-3");

    elementoTitulo.textContent = nome;
    adicionarClasses(elementoTitulo, 'formacao__nome bg-dark py-1 px-3 border-0');
    
    elementoStatus.textContent = concluido? "CONCLUÍDO" : "EM ANDAMENTO";
    adicionarClasses(elementoStatus, 'formacao__status');

    elementoPeriodo.textContent = periodo;
    adicionarClasses(elementoPeriodo, 'formacao__periodo mx-2');

    elementoInstituicao.textContent = instituicao;
    adicionarClasses(elementoInstituicao, 'formacao__instituicao mx-2');
}
