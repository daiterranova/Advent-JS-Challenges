const carta = "    bici coche bici _playstation   casa auto perro   ";
const resultado = {};
letter
  .split(" ")
  .filter((regalo) => regalo[0] !== "_" && regalo !== "")
  .forEach((regalo) => {
    if (resultado[regalo]) {
      resultado[regalo] += 1;
    } else {
      resultado[regalo] = 1;
    }
  });
console.log(resultado);
