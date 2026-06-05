const input = document.getElementById("data");

input.addEventListener("input", (e) => {
  let valor = e.target.value;

  // remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // aplica a máscara DD/MM/AAAA
  if (valor.length > 2) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2);
  }

  if (valor.length > 5) {
    valor = valor.substring(0, 5) + "/" + valor.substring(5);
  }

  // limita tamanho final
  e.target.value = valor.substring(0, 10);
});

function entrar() {
  const data = document.getElementById("data").value;
  const erro = document.getElementById("erro");

  const dataCorreta = "01/01/2024";

  if (data === dataCorreta) {
    document.body.style.transition = "0.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "site.html";
    }, 500);

  } else {
    erro.innerText = "Data incorreta 😢 tenta de novo";
  }
}

document.getElementById("data").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    entrar();
  }
});

let bloqueado = false;

function entrar() {
  if (bloqueado) return;
  bloqueado = true;

  const data = document.getElementById("data").value;
  const erro = document.getElementById("erro");

  const dataCorreta = "01/01/2024";

  if (data === dataCorreta) {
    document.body.style.transition = "0.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "site.html";
    }, 500);
  } else {
    erro.innerText = "Data incorreta 😢 tenta de novo!";
    bloqueado = false;
  }
}