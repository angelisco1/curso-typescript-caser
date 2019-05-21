function getRandomNum() {
  return Math.floor(Math.random()*51);
}

let jugarOtra: boolean;
do {
  let numTurnos: number = 0;
  let numAzar: number = getRandomNum();
  let numUsuario: number;
  do {
    numUsuario = Number(prompt('Introduce un numero: '));
    if (numAzar > numUsuario) {
      console.log('El número buscado es mayor');
    } else if (numAzar < numUsuario) {
      console.log('El número buscado es menor');
    }
    numTurnos++;
  } while(numAzar != numUsuario);
  console.log(`Has acertado!!!
  El número era: ${numAzar}
  Has tardado ${numTurnos} turnos
  `);
  jugarOtra = confirm('Quieres volver a jugar?');
} while(jugarOtra);