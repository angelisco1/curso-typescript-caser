// EJERCICIO

// Definir una interfaz para crear objetos Coche que tengan las siguientes propiedades y metodos
// - Marca
// - Matricula
// - Color
// - Sonido
// - TocarClaxon (metodo)
// - Pintar (metodo)

interface Coche {
  marca: string,
  matricula: string,
  color: string,
  sonido: string,
  tocarClaxon(): void,
  pintar: (color: string) => void
}

let tesla: Coche = {
  marca: 'Tesla',
  matricula: '2421CSF',
  color: 'blanco',
  sonido: 'pii',
  tocarClaxon() {
    console.log(this.sonido)
  },
  pintar(color: string) {
    this.color = color;
  }
}

tesla.tocarClaxon();
tesla.pintar('rojo');
console.log(tesla.color);