document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#formulario").addEventListener("submit", (event) => {
    const dados = getAttributes();

    validar(dados);

    if (!validar(dados)) {
      event.preventDefault();
    }
  });
});

function getAttributes() {
  return {
    nome: [getValue("nome"), "nome"],
    email: [getValue("email"), "email"],
    senha: [getValue("senha"), "senha"],
    senha2: [getValue("confSenha"), "confSenha"],
    dataNasc: [getValue("nasc"), "nasc"],
  };
}

function getValue(id) {
  const field = document.querySelector("#" + id);
  actualValue = field.value;
  return actualValue;
}

function validar(dados) {
  const alertas = document.querySelector("#alertas");
  const campo = document.querySelector("#" + dados.nome[1]);
  if (dados.nome[0].length >= 3 && dados.nome.length <= 50) {
    campo.classList.remove("invalido");
    campo.classList.add("valido");
    alertas.textContent = "Nome válido";
  } else {
    campo.classList.remove("valido");
    campo.classList.add("invalido");
    alertas.textContent = "Nome deve ter entre 3 a 50 caracteres";
  }
}
