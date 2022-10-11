//1
function AutosxCalcomania(placa = []) {
  let Amarilla = 0, Rosa = 0, Roja = 0, Verde = 0, Azul = 0;
  placa.forEach(numero => {
    ultimo = numero.split('')[numero.length - 1];
    switch (ultimo) {
      case '1':
      case '2':
        Amarilla++;
        break;

      case '3':
      case '4':
        Rosa++;
        break;

      case '5':
      case '6':
        Roja++;
        break;

      case '7':
      case '8':
        Verde++;
        break;

      case '9':
      case '10':
        Azul++;
        break;

      default:
        break;
    }
  });
  console.log(
    'Autos con calcomanía amarilla:',
    Amarilla + '\n' + 'Autos con calcomanía Rosa:',
    Rosa + '\n' + 'Autos con calcomania roja:',
    Roja + '\n' + 'Autos con calcomanía verde:',
    Verde + '\n' + 'Autos con calcomanía Azul:',
    Azul
  );
}
console.log('1)');
AutosxCalcomania(
  (placa = [
    '1542',
    '9816',
    '8461',
    '4546',
    '8165',
    '1652',
    '9861',
    '9516',
    '9164',
    '8841',
    '8561',
  ])
);
console.log('\n');

//2
function Zoo(a = [], animal) {
  //Se trabajará con las Jirafas
  let rango1 = 0, rango2 = 0, rango3 = 0;

  a.forEach(edad => {
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
    'Porcentaje de',
    animal,
    'entre 0 y 1 años de edad:',
    rango1 / (rango1 + rango2 + rango3) * 100 + '%'
  );
  console.log(
    'Porcentaje de',
    animal,
    'de mas de 1 y menos de 3 años de edad:',
    rango2 / (rango1 + rango2 + rango3) * 100 + '%'
  );
  console.log(
    'Porcentaje de',
    animal,
    'de 3 o mas años de edad:',
    rango3 / (rango1 + rango2 + rango3) * 100 + '%'
  );
}
console.log('2)');
Zoo((a = [4, 2, 6, 8, 4, 5, 8, 2, 1, 4, 8, 1, 2, 3, 6]), 'Jirafas');
console.log('\n');

//3
function SueldoxEmpleado(Horas) {
  let Sueldo = 0;
  if (Horas <= 40) {
    Sueldo = Horas * 20;
  } else if (Horas >= 40) {
    Sueldo = (Horas - 40) * 25 + 800;
  }
  console.log('El sueldo es de:', Sueldo + '$');
}
console.log('3)');
SueldoxEmpleado(52);
console.log('\n');


//4
function PromedioEdades(Hombres = [], Mujeres = []) {
  let SumatoriaH = 0,
    SumatoriaM = 0,
    PromedioH = 0,
    PromedioM = 0,
    PromedioE = 0;
  Hombres.forEach(Edad => {
    SumatoriaH = SumatoriaH + Edad;
  });
  PromedioH = SumatoriaH / Hombres.length;
  Mujeres.forEach(Edad => {
    SumatoriaM = SumatoriaM + Edad;
  });
  PromedioM = SumatoriaM / Mujeres.length;
  PromedioE = (SumatoriaH + SumatoriaM) / (Hombres.length + Mujeres.length);
  console.log("Promedio de edades de hombres:", PromedioH + "\n" + "Promedio de edades de Mujeres:", PromedioM + "\n" + "Promedio de edades del grupo:", PromedioE);
}
console.log("4)");
PromedioEdades(Hombres = [17, 16, 15, 22, 19, 18, 20, 22, 21, 15, 16, 17, 17, 17], Mujeres = [16, 16, 18, 18, 15, 16, 19, 19, 17, 20, 24, 21, 14]);
console.log('\n');


//5
function NumeroMenor(Numeros = []) {
  let Menor = Infinity;
  Numeros.forEach(Numero => {
    if (Menor > Numero) {
      Menor = Numero;
    }
  });
  console.log("El número menor es:",Menor);
}
console.log("5)");
NumeroMenor(Numeros = [5,8,9,4,5,1,4,9,2,55,3]);
console.log('\n');
