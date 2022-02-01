database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('TABELA CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA DEU ERRO AI MANO');
});

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME varchar(30),
    NICKNAME varchar(30)
    )`).then(result => {
    console.log('TABELA USER CRIADA! BOA MANO');
}).catch(erro => {
    console.log('TABELA USER DEU ERRO AI MANO');
});