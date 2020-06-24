import moment from 'moment'

const diferenciaFechasMeses = (ingreso) => {

    const fecha = moment(ingreso, "YYYY-MM-DD");
    const hoy = moment();
    const diferencia = hoy.diff(fecha, 'days')

    return diferencia
}

export default diferenciaFechasMeses;