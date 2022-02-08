inserirRota('/buscar_usuario',
 function (dados, resposta) {
    console.log(dados);

    database('SELECT * FROM USER')
    .then(result => {
        resposta({list: result});
    }).catch(erro => {
        resposta({erro: 'ERRO AO BUSCAR USUÁRIOS'});
    });
})
inserirRota('/',
 function (dados, resposta) {
    console.log(dados);

    database('SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1')
    .then(result => {
        resposta({user: result[0] });
    }).catch(erro => {
        resposta({erro: 'ERRO AO BUSCAR USUÁRIOS'});
    });
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
    if(!dados.password){
        return resposta({erro:'É necessário preencher a senha!'})
    }

    database(`INSERT INTO USER
    (
        NOME, 
        NICKNAME,
        PASSWORD
    ) 
    VALUES
    (
        "${dados.nome}",
        "${dados.nickname}",
        "${dados.password}"
    )`)
    .then(result => {
        resposta({message: 'USUARIO INSERIDO COM SUCESSO!'});
    }).catch(erro => {
        resposta({erro: 'ERRO AO INSERIR O USUÁRIO!'});
    });

})



// fetch('/api/buscar_usuario',
//     {  
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result) {
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
// }).catch(function(erro) {
//     console.log(erro);
// })