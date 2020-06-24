import Swal from 'sweetalert2'

const AlertaSiguiente = (msg, callBack) => {
    Swal.fire({
        title: '¿Esta seguro?',
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, continuar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            callBack()
        }
    })
}


export default AlertaSiguiente;