const Calculadora = {
  suma: (num1, num2) => num1 + num2,
  resta: (num1, num2) => num1 - num2,
  multiplicacion: (num1, num2) => num1 * num2,
  division: (num1, num2) => (num2 !== 0 ? num1 / num2 : Infinity),
  operacion: function (num1, num2, callback) {
    let result = callback(num1, num2).toFixed(2);
    if (result === "Infinity") {
      alert(`Es imposible dividir por ${num2}`);
    } else {
      if (result - Math.floor(result) == 0) {
        result = Math.floor(result);
        document.getElementById("result").value = `El resultado de la operación es : ${result}`;
    } else {
      document.getElementById("result").value = `El resultado de la operación es : ${result}`;
    }
    }
  },
};

let primeraTeclaPulsada = false;

function handleInputEvent(event) {
  let valor = event.target.value;
  if (valor.toLowerCase() === "p") {
    primeraTeclaPulsada = true;
  } else if (primeraTeclaPulsada && valor.toLowerCase() === "i") {
    primeraTeclaPulsada = false;
    parsedNumber = 3.1415926;
  } else {
    let parsedNumber = parsearNumero(valor);
    if (!isNaN(parsedNumber)) {
      event.target.value = parsedNumber;
    }
  }
}

function parsearNumero(valor) {
  let valorMinusculas = valor.toLowerCase();
  if (valorMinusculas === "pi") {
    return 3.1415926;
  } else if (valorMinusculas === "e") {
    return 2.7182818;
  } else {
    let numero = parseFloat(valorMinusculas);
    if (isNaN(numero)) {
      alert("Ingrese un número válido");
      return NaN;
    } else {
      return numero;
    }
  }
}

document
  .getElementById("number-one")
  .addEventListener("input", handleInputEvent);
document
  .getElementById("number-two")
  .addEventListener("input", handleInputEvent);

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", function (event) {
    let num1 = parsearNumero(document.getElementById("number-one").value);
    let num2 = parsearNumero(document.getElementById("number-two").value);
    let operation = event.target.getAttribute("data-action");

    switch (operation) {
      case "plus":
        Calculadora.operacion(num1, num2, Calculadora.suma);
        break;
      case "minus":
        Calculadora.operacion(num1, num2, Calculadora.resta);
        break;
      case "times":
        Calculadora.operacion(num1, num2, Calculadora.multiplicacion);
        break;
      case "divided":
        Calculadora.operacion(num1, num2, Calculadora.division);
        break;
    }
  });
});

document.getElementById("clear-both").addEventListener("click", clearBoth);

document.getElementById("clear-number-one").addEventListener("click", clearNumberOne);

document.getElementById("clear-number-two").addEventListener("click", clearNumberTwo);

function clearBoth() {
document.getElementById("number-one").value = "";
document.getElementById("number-two").value = "";
document.getElementById("result").value = "";
}


function clearNumberOne() {
  document.getElementById("number-one").value = "";
}

function clearNumberTwo() {
  document.getElementById("number-two").value = "";
}
