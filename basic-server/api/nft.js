inserirRota('/inserir_nft',
    function inserir(dados, resposta) {
        console.log(dados)
        database(`INSERT INTO NFT (nome,image,price,IDUSUARIO) VALUES("${dados.nome}","${dados.image}", "${dados.price}", "${dados.userID}" )`)
    .then(result => {
    console.log('NFT inserido com sucesso!')
    resposta({ message: 'NFT inserido com sucesso' })
     }).catch(erro => {
    console.log('NFT NÃO FOI inserido com sucesso!')
    console.log(erro)
    resposta({ message: 'NFT NÃO FOI inserido com sucesso"' })
            });
    })

    
    inserirRota('/buscar_nft', function (dados, resposta){
        database(`SELECT * FROM NFT WHERE IDUSUARIO = "${dados.userID}"`).then(result => {
            console.log('PRODUTO BUSCADO COM SUCESSO')
            resposta(result)
        }).catch(erro => {
            console.log('PRODUTO NÃO BUSCADO')
            resposta({erro: 'Erro ao BUSCAR o produto!'})
        });
    });




inserirRota('/inserir_nftSell',
    function inserir(dados, resposta) {
        console.log(dados)
        database(`INSERT INTO NFTSell (nome,image,price) VALUES("${dados.nome}","${dados.image}", "${dados.price}")`)
    .then(result => {
    console.log('NFTSell inserido com sucesso!')
    resposta({ message: 'NFTSell inserido com sucesso' })
     }).catch(erro => {
    console.log('NFTSell NÃO FOI inserido com sucesso!')
    console.log(erro)
    resposta({ message: 'NFTSell NÃO FOI inserido com sucesso"' })
            });
    })

    inserirRota('/buscar_nftSell', function (dados, resposta){
        database(`SELECT * FROM NFTSell`).then(result => {
            console.log('PRODUTO SELL BUSCADO COM SUCESSO')
            resposta({ list: result})
        }).catch(erro => {
            console.log('PRODUTO NÃO BUSCADO')
            resposta({erro: 'Erro ao BUSCAR o produto SELL!'})
        });
});
