import Swal from 'sweetalert2';

const Alert = (option, message) => {
  switch (option) {
    case 'basic':
      Swal.fire('Teste de Alert');
      break;
    case 'error-server':
      Swal.fire({
        icon: 'error',
        title: 'Error 404 Server not found ',
        text: `${message}`,
      })
      break;
    case 'error-page':
      Swal.fire({
        icon: 'error',
        title: 'Error 404 Page not found ',
        text: `${message}`,
      })
      break;
    case 'error-login':
      Swal.fire({
        icon: 'error',
        title: 'Ooops',
        text: `${message}`,
      })
      break;
    case 'confirmation':
      break;
    case 'delete':
      break;
    default:
      break;
  }

}

export default Alert;