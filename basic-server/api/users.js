inserirRota('/buscar_usuario',
 function (dados, resposta) {
    console.log(dados);

    resposta({ok:"Resquisição efetuada com sucesso!"})
})

inserirRota('/criar_usuario', 
function name(dados, resposta) {
    console.log(dados);

    if(!dados.nome){
        return resposta({erro:'É necessário preencher o nome"'})
    }
    if(!dados.nickname){
        return resposta({erro:'É necessário preencher o nickname"'})
    }

    database(`INSERT INTO USER
    (
        NOME, 
        NICKNAME
    ) 
    VALUES
    (
        "${dados.nome}",
        "${dados.nickname}"
    )`)
    .then(result => {
        console.log('USUARIO INSERIDO COM SUCESSO!');
        resposta({message: 'USUARIO INSERIDO COM SUCESSO!'});
    }).catch(erro => {
        console.log('ERRO AO INSERIR O USUÁRIO!');
        resposta({erro: 'ERRO AO INSERIR O USUÁRIO!'});
    });

})