// MIXIN

class Disponible {
  estaDisponible: boolean = true;
  cambiarDisponibilidad() {
    this.estaDisponible = !this.estaDisponible;
  }
}

// APLICAR MIXINS

class Persona {
  constructor(public nombre: string) {}

  estaDisponible: boolean;
  cambiarDisponibilidad() {}
}

class HabitacionHotel {
  constructor(public numHabitacion: number) {}

  estaDisponible: boolean;
  cambiarDisponibilidad() {}
}

function applyMixins(claseASobreescribir: any, clasesDeMixins: Array<any>) {
  clasesDeMixins.forEach(clMixin => {
    Object.getOwnPropertyNames(clMixin.prototype).forEach(name => {
      claseASobreescribir.prototype[name] = clMixin.prototype[name]
    })
  })
}

applyMixins(Persona, [Disponible]);
applyMixins(HabitacionHotel, [Disponible]);

let p = new Persona('Chuck')
p.estaDisponible = true;
console.log(p.estaDisponible);
p.cambiarDisponibilidad();
console.log(p.estaDisponible);