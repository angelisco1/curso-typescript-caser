// INTERFACES

interface Pelicula {
  titulo: string,
  anyo: number,
  duracion: number,
  actores?: Array<string>,
  getInfo: () => string
}

const peliculas: Array<Pelicula> = [
  {
    titulo: 'Venom',
    anyo: 2018,
    duracion: 90,
    actores: ['Tom Hardy', '...'],
    getInfo() {
      return `${this.titulo} (${this.anyo}) - ${this.duracion}min`;
    }
  },
  {
    titulo: 'Bumblebee',
    anyo: 2018,
    duracion: 90,
    getInfo() {
      return 'Info'
    }
  },
]

peliculas.forEach(p => console.log(p.getInfo()));

// INTERFACE PARA FUNCIONES

interface FnOperacion {
  (n1: number, n2: number): number
}

let suma: FnOperacion = (n1, n2) => {
  return n1 + n2;
}
let resta: FnOperacion = (n1, n2) => {
  return n1 - n2;
}

// EXTENSION DE INTERFACES

interface Persona {
  nombre: string,
  apellidos: string,
  dni: string
}

interface Profesor extends Persona{
  materias: Array<string>,
  especialidad: string
}

const profe: Profesor = {
  nombre: 'Angel',
  apellidos: 'Villalba',
  dni: '12345678Q',
  materias: ['JS', 'Angular', 'Vue'],
  especialidad: 'Frameworks/Librerías JS'
}

// FUSION DE DECLARACIONES

interface Libro {
  titulo: string,
  isbn: number,
  editorial: string,
}

interface Libro {
  autor: string,
  anyo: number
}

const libro: Libro = {
  titulo: 'Donde surgen las sombras',
  isbn: 78367384264,
  editorial: 'Deagostini',
  autor: 'Un autor',
  anyo: 2001
}