


// var $ = (function() {
//   return {
//    find(slctr) {
//      return Element;
//    }
//   }
// })()

// export const NUM_MAX = 3;

const AuthToken = (() => {
  function getToken(): string {
    return window.sessionStorage.getItem('token') + '';
  }

  function createToken(): string {
    let randomNum = Math.random() + '';
    return randomNum.slice(2);
  }

  function initToken(): void {
    window.sessionStorage.setItem('token', createToken());
  }

  function removeToken(): void {
    window.sessionStorage.removeItem('token');
  }

  return {
    initToken,
    removeToken,
    getToken
  }
})();


// export { AuthToken };

export default AuthToken;