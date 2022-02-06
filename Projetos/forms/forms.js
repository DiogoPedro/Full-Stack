window.onload = init;
function init() {
    let fdemo = document.getElementById("forms1");
    cleanForms(fdemo);
    fdemo.addEventListener("submit", validation);
}

function cleanForms(formulario) {
    let qdeControles = formulario.elements.length;
    for (let i = 0; i < qdeControles; i++) {
        let controle = formulario.elements[i];
        if (controle.defaultValue && controle.type != "submit" && controle.type != "reset") {
            controle.onfocus = function () { //onfocus eh um evento quando se clica em determinado input eh ativado;
                if (this.defaultValue && this.value == this.defaultValue) {
                    this.value = "";
                }
            }
        }
        controle.onblur = function () {
            (this.value == "") ? this.value = this.defaultValue : "";
        }
    }
}

function validation(evt) {
    evt.preventDefault();
    let qdeControles = evt.currentTarget.length;
    let elementsP = document.getElementsByTagName("p");
    let accept = true;
    for (let i = 0; i < qdeControles; i++) {
        let controle = evt.currentTarget.elements[i];
        if (controle.defaultValue == controle.value && controle.type != "submit" && controle.type != "reset" || controle.value.length < 1) {
            //alert("Falta de dados no formulário na " + (i+1) + " parte, por favor, preencha.");
            accept = false;
        }
    }
    (accept) ? newData(evt) : alert("Preencha os dados do formulario!");
}

function newData(evt) {
    //Option 1;
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let status = document.getElementById("statusM");

    name.innerHTML = "Nome do formulario: " + (evt.currentTarget.elements[0].value).bold();
    password.innerHTML = "Senha do formulario: " + (evt.currentTarget.elements[1].value).bold();
    email.innerHTML = "Email do formulario: " + (evt.currentTarget.elements[2].value).bold();
    status.innerHTML = "Voce selecionou a seguinte opcao: " + (evt.currentTarget.elements[3].value).bold();

    name.style.textAlign = "center";
    password.style.textAlign = "center";
    email.style.textAlign = "center";
    status.style.textAlign = "center";
    //Option 2;
    // let elementsP = document.getElementsByTagName("p");

    // elementsP[0].innerHTML = "Nome do formulario: "  + evt.currentTarget.elements[0].value;
    // elementsP[1].innerHTML = "Senha do formulario: " + evt.currentTarget.elements[1].value;
    // elementsP[2].innerHTML = "Email do formulario: " + evt.currentTarget.elements[2].value;

    document.getElementById("fsubmit").disabled = true;
    evt.preventDefault();
}