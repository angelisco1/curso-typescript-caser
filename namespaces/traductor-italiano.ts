namespace Traductor {
  const IT = {
    'hola': 'alo',
    'adios': 'ciao',
    'por favor': 'por favore'
  }

  export function traducirAItaliano(texto: string) {
    return IT[texto] ? IT[texto] : 'No podemos traducirlo';
  }
}