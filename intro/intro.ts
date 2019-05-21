let unTexto = "Un string";
unTexto = '3';
console.log(unTexto)

// let num: number = prompt('Introduce un número: ');
// let num: number = Number(prompt('Introduce un número: '));
// console.log(num + 4);

// TIPOS
let numero: number;
numero = 3;

// let msg;
let msg: any;
msg = 'aaa';
msg = 2;

// Operador ternario
let esPar = 4 % 2 == 0 ? true : false;
console.log(esPar);
console.log(typeof(esPar));

// ARRAYS
let colores: Array<string> = ['Blanco', 'Gris', 'Negro'];
console.log(colores[1]);
colores[1] = 'Naranja';
console.log(colores);

// TUPLAS
let numTelefono: [string, number] = ['+34', 666666666]

// OBJETOS
let persona = {
  nombre: 'Robb',
  apellido: 'Stark',
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
};

console.log(persona.nombre)
console.log(persona['apellido'])

persona.nombre = 'Arya';
console.log(persona)

console.log(persona.nombreCompleto());

// TIPOS

type Serie = {
  nombre: string,
  episodios: number,
  episodiosVistos: number,
  episodiosPorVer: Function,
  finalizada: Function
}

// EJERCICIO SERIES NO FINALIZADAS

let serie1: Serie = {
  nombre: 'GoT',
  episodios: 100,
  episodiosVistos: 89,
  episodiosPorVer: function() {
    return this.episodios - this.episodiosVistos;
  },
  finalizada: function() {
    return this.episodiosPorVer() == 0;
  }
};

let serie2: Serie = {
  nombre: 'TWD',
  episodios: 100,
  episodiosVistos: 100,
  episodiosPorVer: function() {
    return this.episodios - this.episodiosVistos;
  },
  finalizada: function() {
    return this.episodiosPorVer() == 0;
  }
};

let serie3: Serie = {
  nombre: 'The Leftovers',
  episodios: 89,
  episodiosVistos: 88,
  episodiosPorVer: function() {
    return this.episodios - this.episodiosVistos;
  },
  finalizada: function() {
    return this.episodiosPorVer() == 0;
  }
};

let series: Array<Serie> = [serie1, serie2, serie3];

function seriesNoFinalizadas(listaSeries) {
  let series = [];

  for (let i = 0; i < listaSeries.length; i++) {
    if (!listaSeries[i].finalizada()) {
      series.push(listaSeries[i]);
    }
  }

  return series;
}

console.log(seriesNoFinalizadas(series));

// UNION DE TIPOS
type boolOrNum = boolean | number;

// let numOrBool: boolean | number = true;
let numOrBool: boolOrNum = true;
numOrBool = 2;
// numOrBool = 'Un texto';
// Promise<boolean> | boolean | Observable<boolean>


// TEMPLATE LITERALS
// console.log('Me llamo ' + persona.nombre + ' ' + persona.apellido);
console.log(`Me llamo ${persona.nombre} ${persona.apellido}`);

console.log(`Esto
es un texto
en múltiples
líneas`)


// ESTRUCTURAS CONDICIONALES
let nota = 5;

if (nota > 5) {
  console.log('Has aprobado');
} else if (nota == 5) {
  console.log('Has aprobado raspando');
} else {
  console.log('Has suspendido');
}

let mascota = 'pez';

switch(mascota) {
  case 'canario':
    console.log('Tengo un canario');
    break;
  case 'pez':
    console.log('Tengo un pez');
    break;
  default:
    console.log(`Tengo un ${mascota}`);
}

// BUCLES

for (let i = 0; i < series.length; i++) {
  console.log(series[i].nombre);
}

for (let pos in series) {
  console.log(pos + ': ' + series[pos].nombre);
}

for (let key in series[0]) {
  console.log(`${key}: ${series[0][key]}`)
}

for (let serie of series) {
  console.log(serie.nombre);
}

series.forEach(function (elem, pos, arr) {
  console.log(elem.nombre);
})

// let numUser: number = Number(prompt('Introduce el -1 para dejar de pedir numeros'))
// while(numUser != -1) {
//   numUser = Number(prompt('Introduce el -1 para dejar de pedir numeros'));
// }

// do {
//   numUser = Number(prompt('Introduce el -2 para dejar de pedir numeros'));
// } while(numUser != -2)


// DESESTRUCTURACION

let coche = {
  marca: 'Tesla',
  modelo: 'Roadster',
  color: 'rojo',
  sonido: ''
};

// let marca = coche.marca;
// let modelo = coche.modelo;
// let color = coche.color;

let { marca:m, modelo:mo, color } = coche;
// console.log(marca)
// console.log(modelo)
console.log(m)
console.log(mo)
console.log(color)

let {marca, modelo, ...otrasProps} = coche;

console.log(marca);
console.log(modelo);
console.log(otrasProps);


let nombres = ['Charly', 'Peter', 'Lucia', 'Maria'];

// let [nombre1, nombre2, nombre3, nombre4] = nombres;
let [nombre1, , nombre3, nombre4] = nombres;
console.log(nombre1)
// console.log(nombre2)
console.log(nombre3)
console.log(nombre4)


let [charly, ...resto] = nombres;
console.log(charly);
console.log(resto);


let numeros = [1, 2, 3, 4];
let nuevosNumeros = [...numeros];

numeros.push(5);
console.log(numeros);
console.log(nuevosNumeros);

let empresa = {
  nombre: '',
  direccion: '',
}

// let nuevaEmpresa = empresa;
let nuevaEmpresa = {...empresa};
nuevaEmpresa.nombre = 'Caser';

console.log(nuevaEmpresa)
console.log(empresa)