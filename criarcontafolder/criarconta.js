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
        return idade - 1;
    }
    return idade;
}

function validarIdadeMinima(dataNascimento) {
    const idadeMinima = 18;
    const idade = calcularIdade(dataNascimento);
    return idade >= idadeMinima;
}
