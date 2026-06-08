const formElemento = document.querySelector("form");
const btnMenu = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const todosCampos = document.querySelectorAll("input, textarea");

function capturarDados(event) {
    event.preventDefault();
    let formularioValido = true;

    todosCampos.forEach(campo => campo.classList.remove('input-erro'));

    todosCampos.forEach(campo => {
        if (campo.value.trim() === "") {
            campo.classList.add('input-erro');
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    console.log("Formulário validado com sucesso!");
    alert("Formulário enviado com sucesso!");
    event.target.reset();
}

function alternarMenu() {
    menu.classList.toggle('ativo');
}

if (formElemento) {
    formElemento.addEventListener("submit", capturarDados);
}

if (btnMenu) {
    btnMenu.addEventListener("click", alternarMenu);
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});

todosCampos.forEach(campo => {
    campo.addEventListener("input", () => {
        if (campo.value.trim() !== "") {
            campo.classList.remove('input-erro');
        }
    });
});

document.addEventListener("click", (event) => {
    const clicouNoMenu = menu.contains(event.target);
    const clicouNoBotao = btnMenu.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        menu.classList.remove("ativo");
    }
});

const btnTopo = document.getElementById("btn-topo");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});