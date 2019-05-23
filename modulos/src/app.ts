// import * as TODO from './AuthToken';
import AuthToken from './AuthToken';

let btnLogin: HTMLButtonElement = document.querySelector('#btn-login')

btnLogin.addEventListener('click', (event) => {
  AuthToken.initToken();
})