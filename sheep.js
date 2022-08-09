const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  let newlist = [];
  for (let i = 0; i < ovejas.length; i++) {
    let names = ovejas[i].name.toLowerCase();
    if (ovejas[i].color == "rojo") {
      if (names.includes("n") && names.includes("a")) {
        newlist.push(ovejas[i]);
      }
    }
  }
  return newlist;
}
const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
