// Acessar os elementos input
const input1 = document.querySelector('#i-nome');
const input2 = document.querySelector('#i-sobrenome');

// Remover a lista de opções do primeiro input
input1.removeAttribute('list');

// Adicionar um evento para atualizar o segundo input conforme o primeiro é alterado
input1.addEventListener('input', (event) => {
 input2.value = event.target.value;
});

// Validação do Formulário

