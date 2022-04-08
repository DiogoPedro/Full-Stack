window.onload = init;
function init() {
    let button = document.getElementById("test");
    let paragrafo = document.getElementById("aqui");

    button.addEventListener("click", enviarDados);

    function receberDados(){
        let myRequest2 = new XMLHttpRequest();
        myRequest2.open("GET", "http://localhost:3000/");
        myRequest2.send();
        myRequest2.onload = function() {
            paragrafo.innerHTML;
        }
    }

    function enviarDados() {
        let myRequest = new XMLHttpRequest();
        myRequest.open("POST", "http://localhost:3000/history");
        let z = new Object();
        z.email = "josedamotinha@gmail.com";
        myRequest.send(z);
        myRequest.onload = function() {
            paragrafo.innerHTML = myRequest.responseText;
        }
    }
}