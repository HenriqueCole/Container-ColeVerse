database(`INSERT INTO PERSON VALUES (null, 'Henrique', '123'), (null, 'Cole', '456')`).then(result => {
    console.log('INSERT CRIADO! BOA MANO');
}).catch(erro => {
    console.log('INSERT NÃO CRIADO DEU ERRO AI MANO');
});