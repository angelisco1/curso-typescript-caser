enum Genero {
  Accion = 100,
  Terror = 120,
  Suspense = 200,
  // CienciaFiccion = 99, // El siguiente cogeria el valor 100
  CienciaFiccion = 299,
  Comedia
}

console.log(Genero.Accion);
console.log(Genero.Suspense);
console.log(Genero.Comedia);

enum Pais {
  España = 'es',
  Italia = 'it',
  Francia = 'fr'
}

console.log(Pais.Francia);

console.log(Genero[120]);

// console.log(Object.values(Pais)[]);