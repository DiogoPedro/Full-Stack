//Uma informação relevante sobre a utilização de TypeScript com uso do DOM é o tipo que ele recebe, chamado de type 

//<HTMLCollection>
let xElement = document.getElementsByTagName("body");

//<HTMLElement>
let yElement : HTMLElement;

//<HTMLAudioElement>
let zElement : HTMLAudioElement;

//Com os exemplos acima consegue-se notar um poder ABSURDO de tipagem, onde podemos especificar cada um dos tipos do DOM;
//O código abaixo iria nos imprimir um erro:

//zElement = xElement;

//Além de verificação a IDE nos ajuda mostrando uma verdadeira coleção de atributos e metodos que aquele HTML suporta.
//Sugestao de propriedades o length e item.
xElement.length;

let formsElement = document.getElementById("forms1");
formsElement.innerHTML;

//Basicamente é dessa forma que typescript enxerga os elementos html;