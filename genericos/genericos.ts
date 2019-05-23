// TIPOS GENERICOS

let nums: Array<number> = [1, 2, 3, 4];

// FUNCIONES GENERICAS

function getRandom(longitudLista) {
  return Math.floor(Math.random()*longitudLista);
}

function getItem<T>(listaItems: Array<T>, numItems: number = 1): T | Array<T> {
  if (numItems == 1) {
    let pos = getRandom(listaItems.length);
    return listaItems[pos];
  } else {
    let result: Array<T> = [];
    for (let i = 0; i < numItems; i++) {
      let pos = getRandom(listaItems.length);
      let [item] = listaItems.splice(pos, 1);
      result.push(item);
    }
    return result;
  }
}

console.log(getItem<number>([1, 2, 3, 4]));

class Usuario {
  constructor(public nombre: string, public password: string) {}
}

const listaUsuarios = [
  new Usuario('falco', '1234'),
  new Usuario('admin', 'admin'),
  new Usuario('1234', '1234'),
];

console.log(getItem<Usuario>(listaUsuarios, 2));

// INTERFACES GENERICAS

interface Catalogo<T> {
  addProducto: (producto: T) => void,
  removeProducto: (producto: T) => void,
  getProductos: () => Array<T>
}

class Piso {
  constructor(public direccion: string, public metros: number, public duenyo: string) { }
}

// CLASES GENERICAS

class AgenciaPisos implements Catalogo<Piso> {
  constructor(public pisos: Array<Piso> = []) {}

  getProductos() {
    return this.pisos;
  }

  addProducto(piso: Piso) {
    this.pisos.push(piso);
  }

  removeProducto(piso: Piso) {
    this.pisos = this.pisos.filter(p => p.direccion != piso.direccion)
  }
}

let miAgencia = new AgenciaPisos();

let piso1 = new Piso('Dir1', 200, 'D1');
miAgencia.addProducto(piso1)

miAgencia.addProducto(new Piso('Dir2', 200, 'D2'))
miAgencia.addProducto(new Piso('Dir3', 300, 'D3'))

console.log(miAgencia.getProductos());

miAgencia.removeProducto(piso1);
console.log(miAgencia.getProductos());