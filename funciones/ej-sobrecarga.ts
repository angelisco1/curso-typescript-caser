// EJERCICIO

// Sobrecargar una función para devolvernos un array de peliculas que cumplen con un filtro.
// Hay que poder filtrar por:
// - Nombre
// - Genero
// - Año
// - Estrenada

type pelicula = {titulo: string, genero: number, anyo: number, estrenada: boolean}

function Pelicula(titulo: string, genero: number, anyo: number, estrenada: boolean) {
  this.titulo = titulo;
  this.genero = genero;
  this.anyo = anyo;
  this.estrenada = estrenada;
}

const peliculas: Array<pelicula> = [
  new Pelicula('Aladdin', 1, 2019, false),
  new Pelicula('Vengadores: Endgame', 3, 2019, true),
  new Pelicula('Los mercenarios', 3, 2015, true),
]

function filtraPeliculas(peliculas: Array<pelicula>, filtro: string): Array<pelicula>;
function filtraPeliculas(peliculas: Array<pelicula>, filtro: number): Array<pelicula>;
function filtraPeliculas(peliculas: Array<pelicula>, filtro: boolean): Array<pelicula>;

function filtraPeliculas(peliculas: Array<pelicula>, filtro: string | number | boolean): Array<pelicula> {
  if (typeof(filtro) == 'string') {
    return peliculas.filter(p => p.titulo.toLowerCase().includes(filtro.toLowerCase()))
  } else if (typeof(filtro) == 'boolean') {
    return peliculas.filter(p => p.estrenada == filtro);
  } else {
    let metodoFiltro = filtro >= 1000 ? 'anyo' : 'genero';
    return peliculas.filter(p => p[metodoFiltro] == filtro)
  }
}

console.log(filtraPeliculas(peliculas, 3))
console.log(filtraPeliculas(peliculas, 2015))
console.log(filtraPeliculas(peliculas, true))
console.log(filtraPeliculas(peliculas, 'd'))
