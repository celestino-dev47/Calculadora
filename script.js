const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

const operators = ["+", "-", "*", "÷"];

function clearAll() {
  expression = "";
  display.value = "";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const value = button.value;
    const lastChar = expression.slice(-1);
if (value === "C") {
  clearAll();
  return;
}
    // =====================
    // BOTÃO IGUAL
    // =====================
    if (value === "=") {

      if (operators.includes(lastChar)) return;

      try {
        let formatted = expression.replace(/÷/g, "/");

        if (formatted.includes("/0")) {
          display.value = "Erro";
          expression = "";
          return;
        }

        let result = eval(formatted);
        display.value = result;
        expression = result.toString();
      } catch {
        display.value = "Erro";
        expression = "";
      }

      return;
    }

    // =====================
    // BOTÃO LIMPAR
    // =====================
    if (value === "C") {
      expression = "";
      display.value = "";
      return;
    }

    // =====================
    // BOTÃO DELETE
    // =====================
    if (value === "⌫") {
      expression = expression.slice(0, -1);
      display.value = expression;
      return;
    }

    // =====================
    // BLOQUEAR OPERADORES ERRADOS
    // =====================
    if (operators.includes(value)) {

      // Não permitir começar com operador
      if (expression === "") return;

      // Não permitir dois operadores seguidos
      if (operators.includes(lastChar)) return;
    }

    expression += value;
    display.value = expression;

  });
});

// ===== Tema claro e escuro ===== **

  const fundo = document.querySelector("body");
  const barra = document.querySelectorAll(".bar #display, .bar #delete");
  const botaos = document.querySelectorAll(".numbers button, .operadores button,.footer")
  function mudarTema() {
    fundo.classList.toggle("dark")
    barra.forEach(b => {
      b.classList.toggle("dark")
    })
    botaos.forEach(btn => {
      btn.classList.toggle("dark")
    })
  }