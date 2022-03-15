inserirRota('/inserir_nft',
    function inserir(dados, resposta) {
        console.log(dados)
        database(`INSERT INTO NFT 
 (
     nome
image,
price,
)
VALUES
(
    "${dados.name}",
"${dados.imageURL}", 
"${dados.price}"
 )`)
    .then(result => {
    console.log('NFT inserido com sucesso!')
    resposta({ message: 'NFT inserido com sucesso' })
     }).catch(erro => {
    console.log('NFT NÃO FOI inserido com sucesso!')
    console.log(erro)
    resposta({ message: 'NFT NÃO FOI inserido com sucesso"' })
            });
    })
