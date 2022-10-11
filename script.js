//1
function AutosxCalcomania(placa = []) {
  let Amarilla = 0,
    Rosa = 0,
    Roja = 0,
    Verde = 0,
    Azul = 0;
  placa.forEach((numero) => {
    ultimo = numero.split("")[numero.length - 1];
    switch (ultimo) {
      case "1":
      case "2":
        Amarilla++;
        break;

      case "3":
      case "4":
        Rosa++;
        break;

      case "5":
      case "6":
        Roja++;
        break;

      case "7":
      case "8":
        Verde++;
        break;

      case "9":
      case "10":
        Azul++;
        break;

      default:
        break;
    }
  });
  console.log(
    "Autos con calcomanía amarilla:",
    Amarilla + "\n" + "Autos con calcomanía Rosa:",
    Rosa + "\n" + "Autos con calcomania roja:",
    Roja + "\n" + "Autos con calcomanía verde:",
    Verde + "\n" + "Autos con calcomanía Azul:",
    Azul
  );
}
console.log("1)");
AutosxCalcomania(
  (placa = [
    "1542",
    "9816",
    "8461",
    "4546",
    "8165",
    "1652",
    "9861",
    "9516",
    "9164",
    "8841",
    "8561",
  ])
);