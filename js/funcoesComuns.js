export function adicionarClasses(elemento, listaDeClasses = "" | []) {
    listaDeClasses = listaDeClasses.split(" ");
    listaDeClasses.forEach(classe => {
        elemento.classList.add(classe);
    });
}
export function spanMensagemDeErro() {
    var elementoMensagemDeErro = document.createElement('span');
    adicionarClasses(elementoMensagemDeErro, "text-danger bg-danger position-relative mt-5 px-3 py-2 rounded bg-opacity-25");
    elementoMensagemDeErro.textContent = "Houve um erro ao gerar os elementos";
    return elementoMensagemDeErro;
}