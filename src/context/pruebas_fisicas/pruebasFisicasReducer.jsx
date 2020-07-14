import { AGREGAR_PRUEBA } from '../../types'

export default (estado, accion) => {
    /* toma un state y decide que accion le corresponde */
    switch (accion.tipo) {
        case AGREGAR_PRUEBA:
            return {
                ...estado,
                pruebas: accion.payload
            }
        default:
            return estado;
    }
}