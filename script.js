const input = document.getElementById("tarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {

    lista.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {

        const li = document.createElement("li");

        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        li.innerHTML = `
            <span>${tarefa.texto}</span>

            <div>
                <button class="concluir">✔</button>
                <button class="excluir">🗑</button>
            </div>
        `;

        li.querySelector(".concluir").onclick = () => {
            tarefas[indice].concluida = !tarefas[indice].concluida;
            salvarTarefas();
            renderizarTarefas();
        };

        li.querySelector(".excluir").onclick = () => {
            tarefas.splice(indice, 1);
            salvarTarefas();
            renderizarTarefas();
        };

        lista.appendChild(li);

    });

}

function adicionarTarefa() {

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push({
        texto: texto,
        concluida: false
    });

    salvarTarefas();
    renderizarTarefas();

    input.value = "";
}

botao.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionarTarefa();
    }
});

renderizarTarefas();
