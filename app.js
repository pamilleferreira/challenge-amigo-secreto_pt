// Lista para armazenar os nomes inseridos
let listaAmigos = [];

// Capturar os elementos do HTML
const inputAmigo = document.getElementById("amigo");
const listaAmigosUl = document.getElementById("listaAmigos");
const resultadoUl = document.getElementById("resultado");

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Remover espaços extras

    // Validar se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Verificar se o nome já foi adicionado para evitar duplicatas
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adicionar nome à lista
    listaAmigos.push(nome);
    atualizarLista();

    // Limpar campo de entrada após adicionar
    inputAmigo.value = "";
}

// Função para atualizar a lista exibida no HTML
function atualizarLista() {
    // Limpa a exibição antes de recriar a lista
    listaAmigosUl.innerHTML = "";

    // Criar itens da lista dinamicamente
    listaAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        // Criar botão de remoção para cada nome
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("botao-remover");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        listaAmigosUl.appendChild(li);
    });
}

// Função para remover um nome da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verificar se há pelo menos um nome na lista
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

    // Exibir o nome sorteado na área de resultado
    resultadoUl.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${listaAmigos[indiceSorteado]}</strong> 🎁</li>`;
}
