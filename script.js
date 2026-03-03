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


let escuro = false;

function alternarTema() {
  const textos = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, summary, a,button"
  );

  const caixas = document.querySelectorAll(".li, .logo, .ham");

  const C = document.querySelectorAll("#delete, #AC")
  const equal = document.getElementById("equal")
  const numbers = document.querySelectorAll(".numbers button");
  if (!escuro) {
    // modo escuro
    document.body.style.backgroundColor = "#b0ddf7";

    textos.forEach(el => el.style.color = "#000");
    caixas.forEach(el => el.style.borderColor = "#000");
    C.forEach(el => el.style.color = "red");
    numbers.forEach(el => el.style.backgroundColor = "#0083d1");
    equal.style.backgroundColor = "#22C55E"
    escuro = true;
  } else {
    // modo claro (original aproximado)
    document.body.style.backgroundColor = "#0F172A";

    textos.forEach(el => el.style.color = "");
    caixas.forEach(el => el.style.borderColor = "");
   C.forEach(el => el.style.color = "red");
    numbers.forEach(el => el.style.backgroundColor = "");
    equal.style.backgroundColor = "#22C55E"
    escuro = false;
  }
}
