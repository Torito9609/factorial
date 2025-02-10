document.getElementById("calculateBtn").addEventListener("click", function () {
  const numberInput = document.getElementById("numberInput").value;
  const visualizationDiv = document.getElementById("visualization");

  visualizationDiv.innerHTML = "";

  const number = parseInt(numberInput);

  let factorial = 1;
  let stepByStep = "";

  for (let i = number; i > 0; i--) {
    factorial *= i;

    if (i === number) {
      stepByStep += `${i}`;
    } else {
      stepByStep += ` * ${i}`;
    }
  }

  function formatExponential(num) {
    const exponential = num.toExponential().replace("e+", "e");
    const [mantissa, exponent] = exponential.split("e");
    return `${mantissa} × 10<sup>${exponent}</sup>`;
  }

  if (number < 10) {
    visualizationDiv.innerHTML = `
      <p>${number}! = ${stepByStep} = <strong>${factorial}</strong></p>
    `;
  } else if (number >= 10) {
    visualizationDiv.innerHTML = `
      <p>${number}! = ${stepByStep} = <strong>${formatExponential(
      factorial
    )}</strong></p>
    `;
  }
});
