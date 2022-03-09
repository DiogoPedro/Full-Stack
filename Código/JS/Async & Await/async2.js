function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error))
}

async function showUserName(id) {
    const user = await getUser(id);
    console.log(`O usuario eh dado como: ${user.data.first_name}`);
}

showUserName(3);

//Tratar os erros com funções assincronas é bem simples, ele vai tentar executa todo o bloco try, caso nao consiga
// ele vai captura alguma mensagem de erro e vai executar a linha catch logo em seguida, observe que não necessariamente
// voce vai precisar ter alguma funcao ou metodo que utilize promisse no try

function getUser2(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error))
}

async function showUserName2(id) {
    try{
        const user = await getUser2(id);
        console.log(`O usuario eh dado como: ${user.data.first_name}`);
    } catch(error) {
        console.log("O erro: " + error);
    }
}

showUserName2(3);