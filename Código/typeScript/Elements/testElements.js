//Uma informação relevante sobre a utilização de TypeScript com uso do DOM é o tipo que ele recebe, chamado de type 
//<HTMLCollection>
var xElement = document.getElementsByTagName("body");
//<HTMLElement>
var yElement;
//<HTMLAudioElement>
var zElement;
//Com os exemplos acima consegue-se notar um poder ABSURDO de tipagem, onde podemos especificar cada um dos tipos do DOM;
//O código abaixo iria nos imprimir um erro:
//zElement = xElement;
//Além de verificação a IDE nos ajuda mostrando uma verdadeira coleção de atributos e metodos que aquele HTML suporta.
//Sugestao de propriedades o length e item.
xElement.length;
//A ide sugeriu 2 métodos e um total de 10 propriedades.
var formsElement = document.getElementById("forms1");
formsElement.appendChild;
