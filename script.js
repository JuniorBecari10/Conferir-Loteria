const loteriaBox = document.querySelector("select[name='loteria']");

const mesSorteBox = document.querySelector(".mes-sorte");
const timeCoracaoBox = document.querySelector(".time-coracao");;

const dezenasBox = document.querySelector(".input-large textarea");
const conferirBtn = document.querySelector(".input-large button");

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

function check() {
    if (dezenasBox.value === "")
        alert("Você deve colocar algumas dezenas apostadas na caixa Dezenas!");
}
