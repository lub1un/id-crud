const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar } = require("./usuario.js");

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
        criar()
        break;
    case 2:
        listar()
        break;
    case 3:
        atualizar()
        break;
    case 4:
        remover()
        break;
    case 5:
        console.log("Finalizando system...")
        process.exit()
        break;
    default:
        console.log("Opção inválida")
        break;
    }
}