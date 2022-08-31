import {adicionarClasses} from "./funcoesComuns.js";
import {spanMensagemDeErro} from "./funcoesComuns.js";

const secaoFormacoes = document.querySelector('.formacoes');
const divIdiomas = document.querySelector('.idiomas');
const divAcademicas = document.querySelector('.academicas');

//requisição do arquivo json que, ao receber a resposta, se a mesma for OK será armazenada na variável;
var formacoesJson = await fetch("../files/formacoes.json")
.then((resposta) => resposta.ok && (formacoesJson = resposta.json()));

//verifica se a variável está preenchida;
if(formacoesJson) {
    //itera por cada formação e chama a função que cria os elementos com as informações e estilos;
    formacoesJson.forEach(formacao => {
        montarFormacao(formacao);
    });
}
//se a variável não estiver preenchida, é executado o else, o qual limpa o html dentro da seção de formações e adiciona uma mensagem de erro à secaoFormacoes;
else {
    secaoFormacoes.innerHTML = "";
    secaoFormacoes.appendChild(spanMensagemDeErro());
}

function montarFormacao({nome, concluido, instituicao, periodo, tipo} = typeof formacoesJson[0]) {
    //criando os elementos HTML e os salvando em constantes para manipulá-los;
    const divFormacao = document.createElement('div'); //elemento pai
    const elementoTitulo = document.createElement('h3');
    const elementoStatus = document.createElement('span');
    const elementoInstituicao = document.createElement('p');
    const elementoPeriodo = document.createElement('p');

    const listaDeElementosFilho = [elementoTitulo, elementoStatus, elementoInstituicao, elementoPeriodo];
    //faz o "appendChild" no elemento pai para cada elemento criado;
    listaDeElementosFilho.forEach(elemento => {
        divFormacao.appendChild(elemento);
    });
    
    //verfica em qual div o elemento ficará
    if(tipo == "academica") {
        divAcademicas.appendChild(divFormacao);
    }
    else if(tipo == "idioma") {
        divIdiomas.appendChild(divFormacao);
    }

    //adicionando  o textContent e as classes(utilizando uma função do arquivo "funcoesComuns.js");
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
