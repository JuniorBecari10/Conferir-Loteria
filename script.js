const loteriaBox = document.querySelector("select[name='loteria']");

const mesSorteBox = document.querySelector(".mes-sorte");
const timeCoracaoBox = document.querySelector(".time-coracao");;

document.onclick = updateBoxes;
window.onload = updateBoxes;

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
