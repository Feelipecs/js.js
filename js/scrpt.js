const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
  const nome = inputNome.value;
  const idade = inputIdade.value;

  resultado.classList.remove(
    "d-none",
    "alert-success",
    "alert-danger",
    "alert-warning",
  );

  if (idade >= 18) {
    resultado.textContent = "Olá " + nome + "! você é maior de idade.";
    resultado.classList.add("alert-success");
  } else {
    resultado.textContent = `Olá ${nome}! você é menor de idade.`;
    resultado.classList.add("alert-danger");
  }
});
