//Exemplo pratico de uso de promise em requisicao api usando fetch;

const user = 'DiogoPedro';

fetch(`https://api.github.com/users/${user}`, {
    method: 'GET',
    headers: {
        Accepet: 'application/vnd.github.v3.raw+json',
    },
}).then((response) => {
    return response.json()
}).then((data) => {
    let elementh1 = document.createElement("h1");
    elementh1.innerText = data.name;
    document.hasChildNodes(elementh1);
}).catch((error) => {
    console.log(error);
})