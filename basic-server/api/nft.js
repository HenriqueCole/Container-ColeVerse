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
        database(`INSERT INTO NFTSell (nome,image,price,IDUSUARIOVENDEDOR) VALUES("${dados.nome}","${dados.image}", "${dados.price}", "${dados.userID}")`)
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
        database(`SELECT * FROM NFTSell WHERE IDUSUARIOVENDEDOR = "${dados.userID}"`).then(result => {
            console.log('NFT SELL BUSCADO COM SUCESSO')
            resposta(result)
        }).catch(erro => {
            console.log('NFT SELL NÃO BUSCADO')
            resposta({erro: 'Erro ao BUSCAR o produto!'})
        });
    });

    inserirRota('/buscar_nftBuy', function (dados, resposta){
        database(`SELECT * FROM NFTSell`).then(result => {
            console.log('NFT Buy BUSCADO COM SUCESSO')
            resposta(result)
        }).catch(erro => {
            console.log('NFT Buy NÃO BUSCADO')
            resposta({erro: 'Erro ao BUSCAR Buy o produto!'})
        });
    });


    inserirRota('/delete_nft',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM NFT WHERE ID = "${dados.ID}"`)
        .then(result => {
        resposta({message: 'nft  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('nft NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'nft NÃO FOI removido com sucesso"'})
    });
})

inserirRota('/delete_nftSell',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM NFTSell WHERE ID = "${dados.ID}"`)
        .then(result => {
        resposta({message: 'nft  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('nft NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'nft NÃO FOI removido com sucesso"'})
    });
})


inserirRota('/inserir_nftRemoved',
    function inserir(dados, resposta) {
        console.log(dados)
        database(`INSERT INTO NFTsRemoved (ID,price,nome) VALUES("${dados.ID}","${dados.price}", "${dados.nome}")`)
    .then(result => {
    console.log('NFTSell inserido com sucesso!')
    resposta({ message: 'NFTSell inserido com sucesso' })
     }).catch(erro => {
    console.log('NFTSell NÃO FOI inserido com sucesso!')
    console.log(erro)
    resposta({ message: 'NFTSell NÃO FOI inserido com sucesso"' })
            });
    })

    inserirRota('/inserir_nftRemovedSell',
    function inserir(dados, resposta) {
        console.log(dados)
        database(`INSERT INTO NFTsRemoved (ID,price,nome) VALUES("${dados.ID}","${dados.price}", "${dados.nome}")`)
    .then(result => {
    console.log('NFTSell inserido com sucesso!')
    resposta({ message: 'NFTSell inserido com sucesso' })
     }).catch(erro => {
    console.log('NFTSell NÃO FOI inserido com sucesso!')
    console.log(erro)
    resposta({ message: 'NFTSell NÃO FOI inserido com sucesso"' })
            });
    })