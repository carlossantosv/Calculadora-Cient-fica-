let expresion = "";
let grados = true;

document.addEventListener("click", function(e) {

  if (e.target.tagName !== "BUTTON") return;

  const calculadora =
    e.target.closest(".calculadora");

  if (!calculadora) return;

  const pantalla =
    calculadora.querySelector("#display");

  if (!pantalla) return;

  const tecla =
    e.target.textContent.trim();


  function valor() {
    return Function(
      "return " + expresion
    )();
  }


  function radianes(x) {
    return grados
      ? x * Math.PI / 180
      : x;
  }


  function aGrados(x) {
    return grados
      ? x * 180 / Math.PI
      : x;
  }


  function mostrar() {
    pantalla.textContent =
      expresion || "0";
  }


  try {

    /* NÚMEROS */

    if (/^[0-9]$/.test(tecla)) {

      expresion += tecla;

      mostrar();

      return;
    }


    /* DECIMAL */

    if (tecla === ".") {

      expresion += ".";

      mostrar();

      return;
    }


    /* OPERADORES */

    if (tecla === "+") {

      expresion += "+";

      mostrar();

      return;
    }


    if (
      tecla === "−" ||
      tecla === "-"
    ) {

      expresion += "-";

      mostrar();

      return;
    }


    if (
      tecla === "×" ||
      tecla === "*"
    ) {

      expresion += "*";

      mostrar();

      return;
    }


    if (
      tecla === "÷" ||
      tecla === "/"
    ) {

      expresion += "/";

      mostrar();

      return;
    }


    /* PARÉNTESIS */

    if (
      tecla === "(" ||
      tecla === ")"
    ) {

      expresion += tecla;

      mostrar();

      return;
    }


    /* PI */

    if (tecla === "π") {

      expresion += "Math.PI";

      mostrar();

      return;
    }


    /* RAÍZ */

    if (
      tecla === "√" ||
      tecla === "√x"
    ) {

      expresion =
        Math.sqrt(
          valor()
        ).toString();

      mostrar();

      return;
    }


    /* CUADRADO */

    if (
      tecla === "x²" ||
      tecla === "x2"
    ) {

      expresion =
        Math.pow(
          valor(),
          2
        ).toString();

      mostrar();

      return;
    }


    /* POTENCIA */

    if (
      tecla === "xʸ" ||
      tecla === "xy"
    ) {

      expresion += "**";

      mostrar();

      return;
    }


    /* SENO */

    if (tecla === "sin") {

      expresion =
        Math.sin(
          radianes(valor())
        ).toString();

      mostrar();

      return;
    }


    /* COSENO */

    if (tecla === "cos") {

      expresion =
        Math.cos(
          radianes(valor())
        ).toString();

      mostrar();

      return;
    }


    /* TANGENTE */

    if (tecla === "tan") {

      expresion =
        Math.tan(
          radianes(valor())
        ).toString();

      mostrar();

      return;
    }


    /* SENO INVERSO */

    if (
      tecla === "sin⁻¹" ||
      tecla === "asin"
    ) {

      expresion =
        aGrados(
          Math.asin(valor())
        ).toString();

      mostrar();

      return;
    }


    /* COSENO INVERSO */

    if (
      tecla === "cos⁻¹" ||
      tecla === "acos"
    ) {

      expresion =
        aGrados(
          Math.acos(valor())
        ).toString();

      mostrar();

      return;
    }


    /* TANGENTE INVERSA */

    if (
      tecla === "tan⁻¹" ||
      tecla === "atan"
    ) {

      expresion =
        aGrados(
          Math.atan(valor())
        ).toString();

      mostrar();

      return;
    }


    /* LOG */

    if (tecla === "log") {

      expresion =
        Math.log10(
          valor()
        ).toString();

      mostrar();

      return;
    }


    /* LN */

    if (tecla === "ln") {

      expresion =
        Math.log(
          valor()
        ).toString();

      mostrar();

      return;
    }


    /* FACTORIAL */

    if (tecla === "!") {

      let n = valor();

      if (
        n < 0 ||
        !Number.isInteger(n)
      ) {
        throw new Error();
      }

      let resultado = 1;

      for (
        let i = 2;
        i <= n;
        i++
      ) {

        resultado *= i;

      }

      expresion =
        resultado.toString();

      mostrar();

      return;
    }


    /* PORCENTAJE */

    if (tecla === "%") {

      expresion =
        (
          valor() / 100
        ).toString();

      mostrar();

      return;
    }


    /* CAMBIAR SIGNO */

    if (
      tecla === "±" ||
      tecla === "+/-"
    ) {

      expresion =
        "-(" +
        expresion +
        ")";

      mostrar();

      return;
    }


    /* BORRAR */

    if (
      tecla === "⌫" ||
      tecla === "DEL"
    ) {

      expresion =
        expresion.slice(0, -1);

      mostrar();

      return;
    }


    /* AC */

    if (
      tecla === "AC" ||
      tecla === "C"
    ) {

      expresion = "";

      mostrar();

      return;
    }


    /* DEG / RAD */

    if (
      tecla === "DEG" ||
      tecla === "RAD"
    ) {

      grados = !grados;

      e.target.textContent =
        grados ? "DEG" : "RAD";

      return;
    }


    /* IGUAL */

    if (tecla === "=") {

      let resultado =
        valor();

      resultado =
        Number(
          resultado.toPrecision(12)
        );

      expresion =
        resultado.toString();

      mostrar();

      return;
    }

  }

  catch {

    expresion = "";

    pantalla.textContent =
      "Error";

  }

});
