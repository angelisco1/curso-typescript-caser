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


let pelicula = {
  titulo: 'Pelicula 1',
  inicializaInfo: function() {
    this.fechaEstreno = 2000;
    var self = this;
    console.log(this);
    function mostrarPelicula() {
      console.log('Self:', self);
      console.log(this);
    }
    mostrarPelicula();
  }
}

pelicula.inicializaInfo();