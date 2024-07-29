const prompt = require('prompt-sync')({ sigint: true });

let cadastroDados = [];
let nextId = 1;

const cadastrarNome = () => {
    const nome = prompt('Digite o nome para cadastrar: ');
    if (nome.trim()) {
        cadastroDados.push({ id: nextId, nome: nome.trim() });
        console.log(`Cadastro realizado com sucesso! ID do usuário: ${nextId}`);
        nextId++;
    } else {
        console.log('Nome inválido. Tente novamente.');
    }
};

const atualizarNome = () => {
    const id = parseInt(prompt('Digite o ID do usuário a ser atualizado: '), 10);
    if (!isNaN(id)) {
        const usuario = cadastroDados.find(usuario => usuario.id === id);
        if (usuario) {
            const novoNome = prompt('Digite o novo nome: ');
            if (novoNome.trim()) {
                usuario.nome = novoNome.trim();
                console.log(`Nome atualizado com sucesso! ID ${usuario.id}, Novo Nome: ${usuario.nome}`);
            } else {
                console.log('Nome inválido. Tente novamente.');
            }
        } else {
            console.log('Nenhum usuário encontrado com esse ID.');
        }
    } else {
        console.log('ID inválido. Tente novamente.');
    }
};

const deletarUsuario = () => {
    const id = parseInt(prompt('Digite o ID do usuário a ser deletado: '), 10);
    if (!isNaN(id)) {
        const index = cadastroDados.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            cadastroDados.splice(index, 1);
            console.log(`Usuário com ID ${id} deletado com sucesso.`);
        } else {
            console.log('Nenhum usuário encontrado com esse ID.');
        }
    } else {
        console.log('ID inválido. Tente novamente.');
    }
};

const listarUsuarios = () => {
    if (cadastroDados.length > 0) {
        console.log('Lista de Usuários:');
        cadastroDados.forEach(usuario => {
            console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}`);
        });
    } else {
        console.log('Nenhum usuário cadastrado.');
    }
};

module.exports = {
    cadastrarNome,
    atualizarNome,
    listarUsuarios,
    deletarUsuario
}