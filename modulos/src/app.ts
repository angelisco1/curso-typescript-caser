// import * as TODO from './AuthToken';
import AuthToken from './AuthToken';
import Swal from 'sweetalert2';

// import * as $ from 'jquery';

let btnLogin: HTMLButtonElement = document.querySelector('#btn-login')

btnLogin.addEventListener('click', (event) => {
  AuthToken.initToken();
  Swal.fire({
    title: 'Logueado!',
    text: 'Se ha creado el Token',
    type: 'success'
  })
})