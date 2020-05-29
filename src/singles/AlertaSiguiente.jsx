import Swal from 'sweetalert2'

const AlertaSiguiente = (callBack) => {
    Swal.fire({
        title: '¿Esta seguro?',
        text: "Si continúa, no será posible volver a esta seccion",
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