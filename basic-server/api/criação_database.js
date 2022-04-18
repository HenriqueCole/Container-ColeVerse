database(`CREATE TABLE IF NOT EXISTS PERSON (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    NOME varchar(30),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('TABELA PERSON CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA PERSON DEU ERRO AI MANO');
});

database(`CREATE TABLE IF NOT EXISTS NFT (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    image varchar(99999999999999999),
    price varchar(45),
    nome varchar(45),
    IDUSUARIO INTEGER
    )`).then(result => {
    console.log('TABELA NFT CRIADA!');
}).catch(erro => {
    console.log('TABELA NFT DEU ERRO!');
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


database(`CREATE TABLE IF NOT EXISTS NFTSell (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    image varchar(99999999999999999),
    price varchar(45),
    nome varchar(45),
    IDUSUARIOVENDEDOR INTEGER
    )`).then(result => {
    console.log('TABELA NFTSell CRIADA!');
}).catch(erro => {
    console.log('TABELA NFTSell DEU ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS NFTsRemoved (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    price varchar(45),
    nome varchar(45)
    )`).then(result => {
    console.log('TABELA NFT REMOVED CRIADA!');
}).catch(erro => {
    console.log('TABELA NFT REMOVED DEU ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS NFTsRemovedSell (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    price varchar(45),
    nome varchar(45)
    )`).then(result => {
    console.log('TABELA NFT REMOVED SELL CRIADA!');
}).catch(erro => {
    console.log('TABELA NFT REMOVED SELL DEU ERRO!');
});