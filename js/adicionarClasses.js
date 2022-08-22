export default function adicionarClasses(elemento, listaDeClasses = "" | []) {
    listaDeClasses = listaDeClasses.split(" ");
    listaDeClasses.forEach(classe => {
        elemento.classList.add(classe);
    });
}