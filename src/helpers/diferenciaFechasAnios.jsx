import moment from 'moment'

const diferenciaFechasAnios = (ingreso) => {

    const fecha = moment(ingreso, "YYYY-MM-DD");
    const hoy = moment();
    const diferencia = hoy.diff(fecha, 'years')

    return diferencia
}

export default diferenciaFechasAnios