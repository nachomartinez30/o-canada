import { AGREGAR_REGISTRO } from '../../types'

export default (estado, accion) => {
    /* toma un state y decide que accion le corresponde */
    switch (accion.tipo) {
        case AGREGAR_REGISTRO:
            return {
                ...estado,
                candidato: accion.payload
            }
        default:
            return estado;
    }
}