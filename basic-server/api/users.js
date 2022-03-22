// inserirRota('/buscar_usuario',
//  function (dados, resposta) {
//     console.log(dados);

//     database('SELECT * FROM USER')
//     .then(result => {
//         resposta({list: result});
//     }).catch(erro => {
//         resposta({erro: 'ERRO AO BUSCAR USUÁRIOS'});
//     });
// })
// inserirRota('/',
//  function (dados, resposta) {
//     console.log(dados);

//     database('SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1')
//     .then(result => {
//         resposta({user: result[0] });
//     }).catch(erro => {
//         resposta({erro: 'ERRO AO BUSCAR USUÁRIOS'});
//     });
// })

// inserirRota('/criar_usuario', 
// function name(dados, resposta) {
//     console.log(dados);

//     if(!dados.nome){
//         return resposta({erro:'É necessário preencher o nome"'})
//     }
//     if(!dados.nickname){
//         return resposta({erro:'É necessário preencher o nickname"'})
//     }
//     if(!dados.password){
//         return resposta({erro:'É necessário preencher a senha!'})
//     }

//     database(`INSERT INTO USER
//     (
//         NOME, 
//         NICKNAME,
//         PASSWORD
//     ) 
//     VALUES
//     (
//         "${dados.nome}",
//         "${dados.nickname}",
//         "${dados.password}"
//     )`)
//     .then(result => {
//         resposta({message: 'USUARIO INSERIDO COM SUCESSO!'});
//     }).catch(erro => {
//         resposta({erro: 'ERRO AO INSERIR O USUÁRIO!'});
//     });

// })

inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM PERSON`)
        .then(result => {

            resposta(result )


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})

// inserirRota('/login', function(dados, resposta) {
//     console.log(dados)

//     database(`SELECT * FROM PERSON`)
//         .then(result => {

//             resposta(result)


//         }).catch(erro => {
//             resposta({ erro: 'Erro ao inserir o usuario!' });
//         });
// })

inserirRota('/inserir_nft', (dados, resposta)=>{
    database(`insert into NFT (image, price, name) values ("${dados.imageURL}", "${dados.price}", "${dados.name}")`)
    .then(result => {
        resposta ({message: "NFT inserida com sucesso!"})
    }).catch(error => {
        resposta ({erro: error})
    })
})


inserirRota('/login',
    function (dados, resposta) {
        console.log(dados, resposta);
    database(`SELECT * FROM PERSON WHERE NOME = "${dados.name}" AND PASSWORD = "${dados.password}" LIMIT 1`)
        .then(result => {
            console.log('result:', result);
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários!'})
    });
})


inserirRota('/inserir_vendedor', (dados, resposta)=>{
    database(`insert into VENDEDOR (ID) values ("${dados.id}")`)
    .then(result => {
        resposta ({message: "ID VENDEDOR inserida com sucesso!"})
    }).catch(error => {
        resposta ({erro: error})
    })
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