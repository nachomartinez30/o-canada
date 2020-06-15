import { NEW_SESSION } from '../../types'

export default (estado, accion) => {
    /* toma un state y decide que accion le corresponde */
    switch (accion.tipo) {
        case NEW_SESSION:
            return {
                ...estado,
                session: accion.payload
            }
        default:
            return estado;
    }
}