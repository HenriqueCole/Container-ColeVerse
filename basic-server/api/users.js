inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM PERSON`)
        .then(result => {

            resposta(result )


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
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
    database(`INSERT INTO VENDEDOR (PERSON_ID) VALUES ("${dados.id}")`)
    .then(result => {
        resposta ({message: "ID VENDEDOR inserido com sucesso!"})
    }).catch(error => {
        resposta ({erro:"ERRO INSERIR VENDEDOR: ",error})
    })
})

inserirRota('/buscarVendedor', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM VENDEDOR`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'SELECT VENDEDOR FALHA' });
        });
})

    