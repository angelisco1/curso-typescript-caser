namespace Traductor {
  const EN = {
    'hola': 'hello',
    'adios': 'bye bye',
    'por favor': 'please'
  }

  export function traducirAIngles(texto: string) {
    return EN[texto] ? EN[texto] : 'No podemos traducirlo';
  }
}