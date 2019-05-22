// EJERCICIO

// Crear una función que dado un array de strings, tiene que devolver un string con todos los elementos del array concatenados.
// - Se puede pasar un string como parámetro para ponerlo al final del string que se va a devolver.
// - Tiene que recibir un separador como argumento para añadirlo entre cada palabra.

// fn(['gato', 'perro', 'pez']) => 'gato, perro, pez'

// fn(['gato', 'perro', 'pez'], ' - ') => 'gato - perro - pez'

// fn(['gato', 'perro', 'pez'], ', ', '...') => 'gato, perro, pez...'

function concatenar(palabras: Array<string>, separador: string = ', ', end?: string) {
  return palabras.join(separador) + (end ? end : '');
}

console.log(concatenar(['gato', 'perro', 'pez']))
console.log(concatenar(['gato', 'perro', 'pez'], ' - '))
console.log(concatenar(['gato', 'perro', 'pez'], ', ', '...'))