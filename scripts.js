const formElemento = document.querySelector("form");
const btnMenu = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const todosCampos = document.querySelectorAll("input, textarea");
function capturarDados(event) {
    event.preventDefault();

    let formularioValido = true;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    todosCampos.forEach(campo => {
        campo.classList.remove("input-erro");
    });

    // Validação do nome
    if (nome.value.trim().length < 3) {
        nome.classList.add("input-erro");
        formularioValido = false;
    }

    // Validação do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email.value.trim())) {
        email.classList.add("input-erro");
        formularioValido = false;
    }

    // Validação da mensagem
    if (mensagem.value.trim() === "") {
        mensagem.classList.add("input-erro");
        formularioValido = false;
    }

    if (!formularioValido) {
        alert("Verifique os campos destacados.");
        return;
    }

    console.log("Formulário validado com sucesso!");
    alert("Mensagem enviada com sucesso!");
    formElemento.reset();
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
