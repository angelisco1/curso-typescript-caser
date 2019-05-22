// CLASES

class Coche {
  // marca: string;
  // modelo: string;
  // color: string;

  // constructor(marca: string, modelo: string, color: string) {
  //   this.marca = marca;
  //   this.modelo = modelo;
  //   this.color = color;
  // }
  static numRuedas = 4;

  constructor(public marca: string, public modelo: string, public color: string) { }

  toString() {
    return `${this.marca} ${this.modelo} de color ${this.color}`;
  }
}

let seat = new Coche('Seat', 'Ibiza', 'blanco');
console.log(seat.marca)
console.log(seat.modelo)
console.log(seat.color)
console.log(seat.toString());
console.log(seat);
console.log(Coche.numRuedas);

// PROTOTYPE VS NO PROTOTYPE

function C(nombre) {
  this.nombre = nombre;
  this.fn = () => {
    console.log('Cualquier cosa');
  }
}

let c = new C('C');
c.fn();
console.log(c.nombre);
console.log(c);
let d = new C('D');
console.log(d);

C.prototype.otraFn = function() {
  console.log('Otra cosa');
}
d.otraFn();
c.otraFn();

// String.prototype.miIncludes = function(param1) {
//   return this.indexOf(param1) > -1;
// }

// console.log('texto'.miIncludes('t'))


// HERENCIA

class Persona {
  constructor(readonly nombre: string, public apellidos: string, protected edad: number) {}

  toString() {
    return this.nombre + ' ' + this.apellidos;
  }
}

class Profesor extends Persona {
  constructor(nombre: string, apellidos: string, private especialidad: string) {
    super(nombre, apellidos, 20);
  }

  toString() {
    return super.toString() + ' ' + this.edad + ' ' + this.especialidad;
  }
}

let angel = new Profesor('Angel', 'Villalba', 'JS');
// angel.nombre = 'Charly'
// angel.apellidos = 'Falco';
// console.log(angel.nombre)
// console.log(angel.apellidos)
// console.log(angel.especialidad)
// console.log(angel.edad)
// console.log(angel.toString())


abstract class Mascota {
  constructor(private _nombre: string, private _tipo: string) { }

  get nombre() {
    return this._nombre;
  }

  set nombre(val) {
    this._nombre = val;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(val) {
    this._tipo = val;
  }

  abstract hazSonido(): void;

}

// let ricky = new Mascota('Ricky', 'periquito');
// console.log(ricky.nombre)
// ricky.nombre = 'Riki';
// console.log(ricky.nombre)

class Periquito extends Mascota {
  constructor(nombre: string) {
    super(nombre, 'Periquito');
  }

  hazSonido() {
    console.log('Pio pio pio');
  }
}

class Gato extends Mascota {
  constructor(nombre: string) {
    super(nombre, 'Gato');
  }

  hazSonido() {
    console.log('Miau');
  }
}

let gato = new Gato('Felix');
gato.hazSonido();
let ricky = new Periquito('Ricky');
ricky.hazSonido();