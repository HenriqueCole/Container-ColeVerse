// database(`CREATE TABLE IF NOT EXISTS TESTE (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME varchar(30),
//     NUMERO int
//     )`).then(result => {
//     console.log('TABELA CRIADA! BOA MANO');
// }).catch(erro => {
//     console.log('TABELA DEU ERRO AI MANO');
// });

database(`CREATE TABLE IF NOT EXISTS PERSON (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('TABELA PERSON CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA PERSON DEU ERRO AI MANO');
});

database(`INSERT INTO PERSON VALUES (null, 'Henrique', '123'), (null, 'Cole', '456')`).then(result => {
    console.log('INSERT CRIADO! BOA MANO');
}).catch(erro => {
    console.log('INSERT NÃO CRIADO DEU ERRO AI MANO');
});


database(`CREATE TABLE IF NOT EXISTS NFT (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    image varchar(9999)
    )`).then(result => {
    console.log('TABELA NFT CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA NFT DEU ERRO AI MANO');
});