window.onload = init;

function init() {
    createClock();
    attClock();
};
function createClock(){
    const paragrafoNode = document.getElementById("bodyClock");

    let paragrafo = document.createElement("p");
    paragrafo.setAttribute("id", "idClock");

    paragrafo.appendChild(document.createTextNode(""));
    paragrafoNode.appendChild(paragrafo);

}
function attClock(){
    let clockNode = document.getElementById("idClock");
    let day = new Date();

    clockNode.innerText = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
    setInterval(attClock,1000);
}