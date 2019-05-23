// namespace Traductor {
//   const EN = {
//     'hola': 'hello',
//     'adios': 'bye bye',
//     'por favor': 'please'
//   }

//   const IT = {
//     'hola': 'alo',
//     'adios': 'ciao',
//     'por favor': 'por favore'
//   }

//   function traducirAIngles(texto: string) {
//     return EN[texto] ? EN[texto] : 'No podemos traducirlo';
//   }

//   function traducirAItaliano(texto: string) {
//     return IT[texto] ? IT[texto] : 'No podemos traducirlo';
//   }

//   export function traducir(texto: string, idioma: string = 'en') {
//     switch(idioma) {
//       case 'en':
//         return traducirAIngles(texto);
//       case 'it':
//         return traducirAItaliano(texto);
//       default:
//         return 'Ese idioma no lo conocemos';
//     }
//   }
// }

// console.log(Traductor.traducir('hola', 'it'));
// console.log(Traductor.traducir('adios', 'it'));
// console.log(Traductor.traducir('adios'));
// console.log(Traductor.traducir('hola', 'en'));
// console.log(Traductor.traducir('esta traducción no existe', 'en'));
// console.log(Traductor.traducir('buenos dias', 'no-existe'));

/// <reference path="./traductor-ingles.ts" />
/// <reference path="./traductor-italiano.ts" />

console.log(Traductor.traducirAItaliano('hola'));
console.log(Traductor.traducirAItaliano('adios'));
console.log(Traductor.traducirAIngles('adios'));
console.log(Traductor.traducirAIngles('hola'));
console.log(Traductor.traducirAIngles('esta traducción no existe'));