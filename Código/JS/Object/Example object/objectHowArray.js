var artigo = {"titulo": "Introdução a Javascript", "5": 22};
//Eh possivel atráves de javascript fazer associações de algum caracacteristica aa um título;

console.log(artigo["5"]);

artigo["5"] = 20;

//console.log(artigo["titulo"]);
console.log(artigo.titulo);

delete artigo["titulo"];