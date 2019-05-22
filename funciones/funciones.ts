// TIPOS EN FUNCIONES

function saludar(nombre?: string): void {
  console.log(`Hola ${nombre ? nombre : 'Mundo'}`);
}

saludar();
saludar('Angel');

function getRandom(numMax: number = 100): number {
  let num = Math.floor(Math.random()*numMax)
  console.log(numMax)
  return num;
}

console.log(getRandom())
console.log(getRandom(20))


// FUNCIONES ANÓNIMAS

let numeros = [1, 2, 3, 4];

// function muestraNum(num) {
//   console.log(num);
// }

// numeros.forEach(muestraNum);
// muestraNum(2);

numeros.forEach(function(num) {
  console.log(num);
});


// FUNCIONES FLECHA (ARROW)

numeros.forEach(num => {
  console.log(num);
});

numeros.forEach(() => {
  console.log('...');
});

numeros.forEach((num, pos) => {
  console.log(pos + ' ' + num);
});

numeros.forEach((num, pos) => console.log(pos + ' ' + num));

numeros.forEach((num, pos) => {
  console.log(pos)
  console.log(num)
});

let dobles = numeros.map(num => num*2);
console.log(dobles)

let triples = numeros.map(num => {
  return num*3
});
console.log(triples)

// PROBLEMA CON EL THIS

let pelicula = {
  titulo: 'Pelicula 1',
  inicializaInfo: function() {
    this.fechaEstreno = 2000;
    // var self = this;
    // console.log(this);
    // let mostrarPelicula = function(p1, p2) {
    //   // console.log('Self:', self);
    //   console.log(p1, p2);
    //   console.log(this);
    // }
    // mostrarPelicula = mostrarPelicula.bind(this);
    // mostrarPelicula()
    // mostrarPelicula.apply(this, [1, 3])
    // mostrarPelicula.call(this, 1, 3)
    let mostrarPelicula = (p1, p2) => {
      // console.log('Self:', self);
      console.log(p1, p2);
      console.log(this);
    }
    mostrarPelicula(2, 4);
  }
}

pelicula.inicializaInfo();


// DEFINICION DE FUNCIONES

let suma: (n1: number, n2: number) => number = (n1: number) => {
  return n1;
}

console.log(suma(1, 2));

// ORDEN DE PARAMETROS OPCIONALES Y OBLIGATORIOS
// Los opcionales siempre al final del todo.

// function miSlice(texto: string, start?: number, end: number) {
function miSlice(texto: string, start: number = 0, end?: number, p?: number) {
  if (!end) {
    end = texto.length;
  }
  return texto.slice(start, end);
}

console.log(miSlice('Hola mundo'));
console.log(miSlice('Hola mundo', 5));
console.log(miSlice('Hola mundo', 2, 4));
console.log(miSlice('Hola mundo', 2, null, 4));



const pares = numeros.filter((num) => {
  return num % 2 == 0;
});
console.log(pares);

type User = {
  id: number,
  nombre: string
}

const usuarios: User[] = [
  {id: 4, nombre: 'Angel'},
  {id: 100, nombre: 'Sara'},
  {id: 75, nombre: 'Facundo'}
];

let usuario100 = usuarios.find((user) => {
  return user.id == 100;
})
console.log(usuario100);

let sumaTotal = numeros.reduce((acc, num) => {
  return acc += num;
}, 0)
console.log(sumaTotal);

// PARAMETROS REST

function getNumGanadorLoteria(...numsLoteria: Array<number>): string {
  console.log(numsLoteria);
  return numsLoteria.join(', ')
}

console.log(getNumGanadorLoteria(2, 4, 33, 45, 50))
console.log(getNumGanadorLoteria(2, 4, 33, 45, 50, 67))
console.log(getNumGanadorLoteria(2, 4, 33))

// EJERCICIO MEDIA

function media (...nums: Array<number>): number {
  let sumaTotal = nums.reduce((suma, num) => {
    return suma += num;
  }, 0)
  return sumaTotal / nums.length;
}

console.log(media(1, 2, 3, 4))

// SOBRECARGA DE FUNCIONES

function doble(val: number): number;
function doble(val: string): string;

function doble(val: number | string): number | string {
  if (typeof(val) == 'number') {
    return val * 2;
  } else {
    return val.repeat(2);
  }
}

console.log(doble(3))
console.log(doble('Un texto'))
// console.log(doble(true))