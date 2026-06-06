// 1. Seletores
const formElemento = document.querySelector("form");
const btnMenu = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const todosCampos = document.querySelectorAll("input, textarea");

// 2. Função de Validação e Envio
function capturarDados(event) {
    event.preventDefault();
    let formularioValido = true;

    // Remove erros anteriores
    todosCampos.forEach(campo => campo.classList.remove('input-erro'));

    // Verifica campos vazios
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

    // Sucesso
    console.log("Formulário validado com sucesso!");
    alert("Formulário enviado com sucesso!");
    event.target.reset();
}

// 3. Funções de Menu
function alternarMenu() {
    menu.classList.toggle('ativo');
}

// 4. Listeners (Configuração dos eventos)
if (formElemento) {
    formElemento.addEventListener("submit", capturarDados);
}

if (btnMenu) {
    btnMenu.addEventListener("click", alternarMenu);
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});

// Validação em tempo real (limpa o erro ao digitar)
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