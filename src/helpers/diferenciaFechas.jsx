import moment from 'moment'

const diferenciaFechas = (ingreso) => {

    const fecha = moment(ingreso, "YYYY-MM-DD");
    const hoy = moment();

    const diferencia = hoy.diff(fecha, 'months')
    console.log(diferencia);
    
    return diferencia
}

export default diferenciaFechas;