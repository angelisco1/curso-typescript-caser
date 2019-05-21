// let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'Getafe', 'Barcelona', 'Espanyol', 'At Bilbao'];
let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'Getafe', 'Barcelona', 'Espanyol', 'At Bilbao', 'Sevilla'];

function shuffle(equipos) {
  let equiposRandom = [];

  for (let i = equipos.length-1; i >= 0; i--) {
    let pos = Math.floor(Math.random()*equipos.length);
    let equipo = equipos.splice(pos, 1);
    equiposRandom.push(...equipo);
    // console.log(equipo, equipos, equiposRandom);
  }

  return equiposRandom;
}

// equipos = shuffle(equipos);
function enfrentamientos(equipos) {
  if (equipos.length >= 2) {
    let [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} - ${equipo2}`);
    enfrentamientos(restoEquipos);
  } else {
    if (equipos.length == 1) {
      console.log(`${equipos[0]} pasa a la siguiente fase`);
    }
    console.log('Ya no quedan más equipos');
  }
}

enfrentamientos(shuffle(equipos));