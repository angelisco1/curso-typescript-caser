
// EJERCICIO FIZZ-BUZZ

let numeroFizzBuzz: number = Number(prompt('Introduce un número: '));
let msgFB: string = '';

if (numeroFizzBuzz % 3 == 0) {
  msgFB += "Fizz"
}
if (numeroFizzBuzz % 5 == 0) {
  msgFB += "Buzz"
}

console.log(msgFB ? msgFB : numeroFizzBuzz);
// Se evaluan a False los siguientes valores: false, null, undefined, 0, ''
// Se evaluan a True los siguientes valores: true, cualquier número distinto a 0, cualquier string distinto a '', objetos, arrays