const loteriaBox = document.querySelector("select[name='loteria']");
const concursoBox = document.getElementById("concurso-box");

const mesSorteBox = document.querySelector(".mes-sorte");
const timeCoracaoBox = document.querySelector(".time-coracao");;

const dezenasBox = document.querySelector(".input-large textarea");
const conferirBtn = document.querySelector(".input-large button");

const apiUrl = "https://loteriascaixa-api.herokuapp.com/api";

document.onclick = updateBoxes;
window.onload = updateBoxes;

conferirBtn.onclick = check;

function updateBoxes() {
    if (loteriaBox.value !== "dia-de-sorte")
        mesSorteBox.classList.add("disabled");
    else
        mesSorteBox.classList.remove("disabled");
    
    if (loteriaBox.value !== "timemania")
        timeCoracaoBox.classList.add("disabled");
    else
        timeCoracaoBox.classList.remove("disabled");
};

function check() { // se a pessoa colocar na ordem errada ordenar da forma certa
    if (dezenasBox.value === "")
        alert("Você deve colocar algumas dezenas apostadas na caixa Dezenas!");
    else {
        var loteria = loteriaBox.value;
        var concurso = concursoBox.value === "" ? "latest" : concursoBox.value;
        
        var json = getJSON(apiUrl + "/" + loteria + "/" + concurso);
    }
}

// eu sei que o xmlhttprequest está deprecated...
function getJSON(url) {
    var http = new XMLHttpRequest();
    
    http.open("GET", url, false);
    http.send(null);
    
    return JSON.parse(http.responseText);
}
