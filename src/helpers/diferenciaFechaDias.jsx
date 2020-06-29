import moment from 'moment'

const diferenciaFechasDias = (ingreso) => {

    const fecha = moment(ingreso, "YYYY-MM-DD");
    const hoy = moment();
    const diferencia = hoy.diff(fecha, 'days')
    console.log('diferencia => ' + diferencia);

    return diferencia
}

export default diferenciaFechasDias;
