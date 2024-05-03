import ehUmCPF from "./validations/valida-cpf.js";
import ehMaiorDeIdade from "./validations/valida-idade.js";
import { mensagens } from "./errorMessages.js";

const $camposDoFormularios = document.querySelectorAll("[required]");
const $formulario = document.querySelector("[data-form]");

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespostas = {
    nome: e.target.elements["nome"].value,
    email: e.target.elements["email"].value,
    cpf: e.target.elements["cpf"].value,
    aniversario: e.target.elements["birthday"].value,
  };

  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
  window.location.href = "../pages/signup-2.html";
});

const tiposDeErros = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

$camposDoFormularios.forEach((campos) => {
  campos.addEventListener("blur", () => verificaCampo(campos));
  campos.addEventListener("invalid", (event) => {
    event.preventDefault();
    const mensagemErro = campos.parentNode.querySelector(".error-message");
    if (campos.validity.valueMissing) {
      mensagemErro.textContent = mensagens[campos.name].valueMissing;
      campos.style.borderColor = "#e21e4f";
    }
  });
});

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");

  if (campo.name === "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }

  if (campo.name === "birthday" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }

  tiposDeErros.forEach((erro) => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });

  const mensagemErro = campo.parentNode.querySelector(".error-message");
  const validadorDeInput = campo.checkValidity();
  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    campo.style.borderColor = "#e21e4f";
  } else {
    mensagemErro.textContent = "";
    campo.style.borderColor = "#1ee24f";
    campo.style.backgroundColor = "transparent";
  }
}

function limparFormulario(e){
  e.target.elements["nome"].value = "";
  e.target.elements["email"].value = "";
  e.target.elements["cpf"].value = "";
  e.target.elements["birthday"].value = "";
}