const prompt = require("prompt-sync")();
const { cadastrarNome, listarUsuarios, atualizarNome, deletarUsuario } = require("./idCrud.js");

while (true) {
    console.log(`
        1. Adicionar Usuário
        2. Listar Usuários
        3. Atualizar Usuários
        4. Remover Usuários
        5. Para sair
        `);

    const opcao = parseInt(prompt("Escolha uma opção acima: "));

    switch (opcao) {
    case 1:
        cadastrarNome()
        break;
    case 2:
        listarUsuarios()
        break;
    case 3:
        atualizarNome()
        break;
    case 4:
        deletarUsuario()
        break;
    case 5:
        process.exit()
        break;
    default:
        console.log("Opção inválida")
        break;
    }
}