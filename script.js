const input = document.getElementById("tarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionarTarefa();
    }
});

function adicionarTarefa(){

    const texto = input.value.trim();

    if(texto === ""){
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${texto}</span>

        <div>
            <button class="concluir">✔</button>
            <button class="excluir">🗑</button>
        </div>
    `;

    lista.appendChild(li);

    input.value = "";

    li.querySelector(".concluir").addEventListener("click", function(){

        li.classList.toggle("concluida");

    });

    li.querySelector(".excluir").addEventListener("click", function(){

        li.remove();

    });

}
