// EJERCICIO

// Crear una clase que represente una Serie. Esta tiene que tener las siguientes propiedades y métodos:
// - Titulo
// - Año de estreno
// - Episodios
// - Temporadas
// - Episodios Vistos
// - Finalizada/Cancelada
// - Ver episodio (metodo)
// - Episodios por ver (metodo)
// - Serie Vista (metodo)
// - toString (metodo)

class Serie {
  constructor(
    public titulo: string,
    public anyo: number,
    public episodios: number,
    public episodiosVistos: number,
    public temporadas: number,
    public cancelada: boolean) { }

  verEpisodio() {
    this.episodiosVistos += 1;
  }

  episodiosPorVer() {
    return this.episodios - this.episodiosVistos;
  }

  serieVista() {
    return this.episodiosPorVer() == 0;
  }

  toString() {
    console.log(`
    ${this.titulo} (${this.anyo})
    Temporadas: ${this.temporadas}
    Episodios: ${this.episodiosVistos}/${this.episodios}
    Cancelada: ${this.cancelada}
    Finalizada: ${this.serieVista()}
    `)
  }
}

let leftovers = new Serie('The Leftovers', 2011, 40, 39, 3, true);
leftovers.toString();
leftovers.verEpisodio();
leftovers.toString();