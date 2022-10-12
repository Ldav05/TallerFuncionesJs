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
console.log("\n");

//2
function Zoo(a = [], animal) {
  //Se trabajará con las Jirafas
  let rango1 = 0,
    rango2 = 0,
    rango3 = 0;

  a.forEach((edad) => {
    if (edad >= 0 && edad <= 1) {
      rango1++;
    }
    if (edad > 1 && edad > 3) {
      rango2++;
    }
    if (edad >= 3) {
      rango3++;
    }
  });

  console.log(
    "Porcentaje de",
    animal,
    "entre 0 y 1 años de edad:",
    (rango1 / (rango1 + rango2 + rango3)) * 100 + "%"
  );
  console.log(
    "Porcentaje de",
    animal,
    "de mas de 1 y menos de 3 años de edad:",
    (rango2 / (rango1 + rango2 + rango3)) * 100 + "%"
  );
  console.log(
    "Porcentaje de",
    animal,
    "de 3 o mas años de edad:",
    (rango3 / (rango1 + rango2 + rango3)) * 100 + "%"
  );
}
console.log("2)");
Zoo((a = [4, 2, 6, 8, 4, 5, 8, 2, 1, 4, 8, 1, 2, 3, 6]), "Jirafas");
console.log("\n");

//3
function SueldoxEmpleado(Horas) {
  let Sueldo = 0;
  if (Horas <= 40) {
    Sueldo = Horas * 20;
  } else if (Horas >= 40) {
    Sueldo = (Horas - 40) * 25 + 800;
  }
  console.log("El sueldo es de: $" + Sueldo);
}
console.log("3)");
SueldoxEmpleado(52);
console.log("\n");

//4
function PromedioEdades(Hombres = [], Mujeres = []) {
  let SumatoriaH = 0,
    SumatoriaM = 0,
    PromedioH = 0,
    PromedioM = 0,
    PromedioE = 0;
  Hombres.forEach((Edad) => {
    SumatoriaH = SumatoriaH + Edad;
  });
  PromedioH = SumatoriaH / Hombres.length;
  Mujeres.forEach((Edad) => {
    SumatoriaM = SumatoriaM + Edad;
  });
  PromedioM = SumatoriaM / Mujeres.length;
  PromedioE = (SumatoriaH + SumatoriaM) / (Hombres.length + Mujeres.length);
  console.log(
    "Promedio de edades de hombres:",
    PromedioH + "\n" + "Promedio de edades de Mujeres:",
    PromedioM + "\n" + "Promedio de edades del grupo:",
    PromedioE
  );
}
console.log("4)");
PromedioEdades(
  (Hombres = [17, 16, 15, 22, 19, 18, 20, 22, 21, 15, 16, 17, 17, 17]),
  (Mujeres = [16, 16, 18, 18, 15, 16, 19, 19, 17, 20, 24, 21, 14])
);
console.log("\n");

//5
function NumeroMenor(Numeros = []) {
  let Menor = Infinity;
  Numeros.forEach((Numero) => {
    if (Menor > Numero) {
      Menor = Numero;
    }
  });
  console.log("El número menor es:", Menor);
}
console.log("5)");
NumeroMenor((Numeros = [5, 8, 9, 4, 5, 1, 4, 9, 2, 55, 3]));
console.log("\n");

//6
function Bascula(DiezBasculas = [], PesoAnterior) {
  let SumatoriaPeso = 0,
    PromedioPeso = 0;
  DiezBasculas.forEach((Peso) => {
    SumatoriaPeso += Peso;
  });
  PromedioPeso = SumatoriaPeso / DiezBasculas.length;
  if (PromedioPeso > PesoAnterior) {
    console.log("SUBIÓ(" + (PromedioPeso - PesoAnterior) + "kg)");
  } else if (PromedioPeso < PesoAnterior) {
    console.log("BAJÓ(" + (PesoAnterior - PromedioPeso) + "kg)");
  } else {
    console.log("SIN CAMBIO");
  }
}
console.log("6)");
Bascula(
  (Pesaje = [100, 100.2, 99, 100, 100.4, 99.6, 99.8, 100, 100, 100.4]),
  140
);
console.log("\n");

//7
function TotalCompra(ListaCompra) {
  let Total = 0;
  ListaCompra.forEach((Precio, Producto) => {
    Total += Precio;
  });
  console.log("El total de la compra es: $" + Total);
}
console.log("7)");
let ListaCompra = new Map();
ListaCompra.set("TotalPoducto1", 18000);
ListaCompra.set("TotalPoducto2", 8000);
ListaCompra.set("TotalPoducto3", 25000);
ListaCompra.set("totalPoducto4", 2500);
ListaCompra.set("TotalPoducto5", 5000);
TotalCompra(ListaCompra);
console.log("\n");

//8
function Teatro(Clientes = [], Precio) {
  let Categoria1 = 0,
    Categoria2 = 0,
    Categoria3 = 0,
    Categoria4 = 0,
    Categoria5 = 0;
  Clientes.forEach((Edad) => {
    switch (true) {
      case 5 <= Edad && Edad <= 14:
        Categoria1 += Precio * 0.35;
        break;
      case 15 <= Edad && Edad <= 19:
        Categoria2 += Precio * 0.25;
        break;
      case 20 <= Edad && Edad <= 45:
        Categoria3 += Precio * 0.1;
        break;
      case 46 <= Edad && Edad <= 65:
        Categoria4 += Precio * 0.25;
        break;
      case Edad >= 66:
        Categoria5 += Precio * 0.35;
        break;

      default:
        break;
    }
  });
  console.log(
    "- Lista de cantidad de dinero no percibido por categoría -\n" + "5 - 14: $" +
    Categoria1 + "\n" + "15 - 19: $" +
    Categoria2 + "\n" + "20 - 45: $" +
    Categoria3 + "\n" + "46 - 65: $" +
    Categoria4 + "\n" + "66+: $" +
    Categoria5
  );
}
console.log("8)");
Teatro(Clientes = [4, 5, 5, 8, 44, 65, 88, 21, 48, 96, 21, 47, 52, 8, 6, 2, 1, 4, 94, 15, 18, 16, 16, 17], 22000);
console.log("\n");

//9
function Kia(Vendedores) {
  Vendedores.forEach((Valor, Vendedor) => {
    switch (true) {
      case Valor <= 20000000:
        console.log(Vendedor, "Vendió $" + Valor, "y obtuvo una comisión de $" + (Valor * 0.10) + "\n");
        break;
      case 20000000 < Valor && Valor < 40000000:
        console.log(Vendedor, "Vendió $" + Valor, "y obtuvo una comisión de $" + (Valor * 0.15) + "\n");
        break;
      case 40000000 <= Valor && Valor < 80000000:
        console.log(Vendedor, "Vendió $" + Valor, "y obtuvo una comisión de $" + (Valor * 0.20) + "\n");
        break;
      case 80000000 <= Valor && Valor < 160000000:
        console.log(Vendedor, "Vendió $" + Valor, "y obtuvo una comisión de $" + (Valor * 0.25) + "\n");
        break;
      case Valor >= 160000000:
        console.log(Vendedor, "Vendió $" + Valor, "y obtuvo una comisión de $" + (Valor * 0.30) + "\n");
        break;

      default:
        break;
    }
  });
}
console.log("9)");
/*Se realizará la prueba con una muestra del 10% de los vendedores, por motivos de cantidad de datos,
Pero cabe resaltar que al ser una estructura de datos dinámica, puede admitir la cantidad de datos deseados.*/
let VendedoresKia = new Map();
VendedoresKia.set("Vendedor1", 45562546), VendedoresKia.set("Vendedor2", 54632541), VendedoresKia.set("Vendedor3", 26541575), VendedoresKia.set("Vendedor4", 63254125), VendedoresKia.set("Vendedor5", 74521652), VendedoresKia.set("Vendedor6", 965213656), VendedoresKia.set("Vendedor7", 125462533), VendedoresKia.set("Vendedor8", 85231254), VendedoresKia.set("Vendedor9", 936254), VendedoresKia.set("Vendedor10", 45936254);
Kia(VendedoresKia);
console.log("\n");


//10
function Encuesta(Votos) {
  let C1 = 0, C2 = 0, C3 = 0;
  Votos.forEach(Voto => {
    switch (Voto) {
      case "C1":
        C1++;
        break;
      case "C2":
        C2++;
        break;
      case "C3":
        C3++;
        break;

      default:
        break;
    }
  });

  if (C1 > C2 && C1 > C3) {
    console.log("El ganador es el candidato #1");
  } if (C2 > C1 && C2 > C3) {
    console.log("El ganador es el candidato #2");
  } if (C3 > C1 && C3 > C2) {
    console.log("El ganador es el candidato #3");
  } if (C2 == C1) {
    console.log("Empate entre los candidatos #1 y #2");
  } if (C2 == C3) {
    console.log("Empate entre los candidatos #2 y #3");
  } if (C3 == C1) {
    console.log("Empate entre el candidato #1 y #3");
  } else if (C1 == C2 && C1 == C3) {
    console.log("Triple empate");
  }

  console.log("----------Lista de Votos---------\n" + "Candidato #1:", C1, "votos \n" + "Candidato #2:", C2, "votos \n" + "Candidato #3:", C3, "votos \n");
}
console.log("10)")
//Se trabajará con una muestra representativa
Encuesta(Votos = ["C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2", "C1", "C1", "C2", "C3", "C2"]);
console.log("\n");


//11
function Primos(Numeros = []) {
  let Sumatoria = 0, Productoria = 1;
  Numeros.forEach(Numero => {
    Sumatoria = Sumatoria + Numero;
    Productoria = Numero * Productoria;
  });
  console.log("Sumatoria:", Sumatoria + "\nProductoria:", Productoria + "\nPromedio:", (Sumatoria / Numeros.length));
}
console.log("11)");
Primos(Numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
console.log("\n");


//12
function Entero(Numero) {
  let Digitos = [], Sumatoria = 0, Productoria = 1;
  while (Numero > 0) {
    Digitos.push(Numero % 10);
    Numero = parseInt(Numero / 10);
  }
  Digitos.reverse();
  Digitos.forEach(Numero => {
    Sumatoria = Sumatoria + Numero;
    Productoria = Numero * Productoria;
  });
  console.log("Sumatoria:", Sumatoria + "\nProductoria:", Productoria + "\nPromedio:", (Sumatoria / Numeros.length));

}
console.log("12)");
Entero(225);
console.log("\n");


//13
function Fibonacci(Limite) {

  var fibo = [1, 2], Serie = [], Par = 0, Impar = 0, Ceros = 0;

  for (i = 2; i <= Limite; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
    Serie.push(fibo[i]);
  }

  Serie.forEach(Numero => {
    if (Numero == 0) {
      Ceros++;
    }
    if ((Numero % 2) == 0) {
      Par++;
    } if ((Numero % 2) != 0) {
      Impar++;
    }
  });

  console.log("Pares:",Par+"\nImpares:",Impar+"\nCeros:",Ceros);
}
console.log("13)");
Fibonacci(100);
console.log("\n");


//14
function MCD(a, b) {
  let Aux; 
  while (b !== 0) {
      Aux = b;
      b = a % b;
      a = Aux;
  }
  console.log("Máximo común divisor:",a);
}
console.log("14)");
MCD(45,18);
console.log("\n");
