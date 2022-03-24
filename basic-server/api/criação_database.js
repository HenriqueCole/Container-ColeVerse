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
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
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
    image varchar(9999),
    price varchar(45),
    nome varchar(45)
    )`).then(result => {
    console.log('TABELA NFT EDITADA CRIADA!');
}).catch(erro => {
    console.log('TABELA NFT EDITADA DEU ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS VENDEDOR (
    PERSON_ID INTEGER UNIQUE, 
    FOREIGN KEY (PERSON_ID)
    REFERENCES PERSON(ID)
    )`).then(result => {
    console.log('TABELA VENDEDOR CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA VENDEDOR DEU ERRO AI MANO');
});
database(`INSERT INTO VENDEDOR VALUES (999)`).then(result => {
    console.log('INSERT VENDEDOR CRIADO! BOA MANO');
}).catch(erro => {
    console.log('INSERT VENDEDOR NÃO CRIADO DEU ERRO AI MANO');
});

