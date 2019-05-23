// EJERCICIO

// Crear una clase que funcione como un Map generico (objeto clave/valor).
// Tiene que tener las siguientes funcionalidades:
// - Añadir un nuevo elemento
// - Obtener un elemento
// - Comprobar si existe un elemento
// - Vaciar la lista
// - Mostrar los items que hay en el Map

// type M<T, K> = {
//   [T]: K
// }
type T = string | number;

class MiMap<K> {
  // constructor(public obj: {T: K} = {}) { }
  constructor(public obj = {}) { }

  add(key: T, val: K): void {
    this.obj[key] = val;
  }

  has(key: T): boolean {
    return this.obj[key] ? true : false;
  }

  get(key: T): K {
    if (this.has(key)) {
      return this.obj[key];
    }
    return null;
  }

  clear(): void {
    this.obj = {};
  }

  show(): void {
    let valores = '';
    for (let key in this.obj) {
      valores += '\n' + key + ': ' + JSON.stringify(this.obj[key])
    }
    console.log(`
    *********
    ${valores}
    *********
    `)
  }
}

interface Serie {
  titulo: string,
  finalizada: boolean
}

let mapSeries = new MiMap<Serie>()
mapSeries.add(1, {titulo: 'GoT', finalizada: true})
mapSeries.add(2, {titulo: 'TWD', finalizada: true})
console.log(mapSeries.get(2));
mapSeries.show();
mapSeries.clear();
mapSeries.show();
