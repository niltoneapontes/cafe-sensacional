console.log("Olá, javascript");

function handleButtonClick(event) {
  const button = document.getElementById("orderButton");

  console.log("Enviando pedido");
  button.innerText = "Enviando...";

  setTimeout(() => {
    button.innerText = "Seu pedido foi enviado";
    button.classList.add("clicked");
  }, 2000);
}
