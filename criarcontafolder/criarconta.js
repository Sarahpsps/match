const users = [];

function createAccount(usuario, email, senha, dataNascimento, gender){
    const userExists = users.some(user => user.usuario === usuario);
    if(userExists){
        return { sucess: false, message: 'Nome de usuário já existe'};
    }
    users.push({usuario, email, senha, dataNascimento, gender});
    return {sucess: true, message: 'Conta criada com sucesso!'};
}

function validarDataNascimento() {
    var data = document.getElementById("dataNascimento").value;
    data = data.replace(/\//g, "-"); // substitui barras por hífen
    // Verifique a idade aqui e tome a ação apropriada
}

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const data = new Date(dataNascimento);
    const idade = hoje.getFullYear() - data.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = data.getMonth();

    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && hoje.getDate() < data.getDate())) {
        idade --;
    }
    return idade;
}

function validarIdadeMinima(dataNascimento) {
    const idadeMinima = 18;
    const idade = calcularIdade(dataNascimento);
    return idade >= idadeMinima;
}

    document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.querySelector('input[name="usuario"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const dataNascimento = document.querySelector('input[name="dataNascimento"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!validarIdadeMinima(dataNascimento)) {
        alert('Você deve ter pelo menos 18 anos para criar uma conta.');
        return;
    }

    const result = createAccount(usuario, email, senha, dataNascimento, gender);

    alert(result.message);
});
