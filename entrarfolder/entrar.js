const users = [];

function checarconta(usuario, senha){
    const userExists = users.find(user => user.usuario === usuario);
    if(userExist){
        if(user.senha === senha)
        return {sucess: true}
    };
    if(!userExists){
        return {sucess: false, message: 'Usuário inexistente'}
    }
    return {sucess: false, message: 'Usuário ou senha inválidos'}
}