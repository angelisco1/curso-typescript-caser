import axios from 'axios';

const URL: string = 'https://anapioficeandfire.com/api/characters/222';

// console.log('1')
// setTimeout(() => {
//   console.log('2')
// }, 1000);
// console.log('3')

axios.get(URL)
  .then((resp) => {
    console.log(resp);
  });