import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S190 = (props) => {
  const { state, setState } = props

  const setInfo = (input) => {
    /* setea al state las variables */
    setState({
      ...state,
      [input.target.name]: input.target.value
    })
  }
  return (
    <div className='row'>
      {/* 1. Las siguientes corresponden a las partes del incendio: */}
      <div className='col-12'>
        <label className="control-label pt-2">1. Las siguientes corresponden a las partes del incendio:</label>
        <select
          className="form-control myInput"
          name='1_partes_incendio'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Cola, origen, flancos, dedos, línea de control.</option>
          <option value='b'>b) Bolsa, cola, origen, flancos, dedos.</option>
          <option value='c'>c) Isla, línea de fuego, origen, focos secundarios.</option>
          <option value='d'>d) Línea en retroceso, bolsas, perímetro del incendio, isla.</option>
        </select>
      </div>

      {/* 2. Los siguientes, son elementos que componen el triángulo del fuego: */}
      <div className='col-12'>
        <label className="control-label pt-2">2. Los siguientes, son elementos que componen el triángulo del fuego:</label>
        <select
          className="form-control myInput"
          name='2_triangulo_fuego'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Tiempo atmosférico, topografía, calor.</option>
          <option value='b'>b) Oxígeno, combustibles, topografía.</option>
          <option value='c'>c) Calor, combustibles, oxígeno.</option>
          <option value='d'>d) Ignición, combustibles, tiempo atmosférico.</option>
        </select>
      </div>

      {/* 3. ¿Qué es más importante en el comportamiento del fuego? */}
      <div className='col-12'>
        <label className="control-label pt-2">3. ¿Qué es más importante en el comportamiento del fuego?</label>
        <select
          className="form-control myInput"
          name='3_comportamiento_fuego'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) La cantidad de combustible total.</option>
          <option value='b'>b) La cantidad de combustible disponible.</option>
          <option value='c'>c) El número de combatientes.</option>
          <option value='d'>d) El clima.</option>
        </select>
      </div>

      {/* 4. Estar de noche en terreno desconocido es: */}
      <div className='col-12'>
        <label className="control-label pt-2">4. Estar de noche en terreno desconocido es:</label>
        <select
          className="form-control myInput"
          name='4_terreno_desconocido'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Una situación que grita ¡cuidado!</option>
          <option value='b'>b) Una norma de combate.</option>
          <option value='c'>c) Todas las anteriores.</option>
        </select>
      </div>

      {/* 5. ¿Qué es lo más importante en el combate de incendios? */}
      <div className='col-12'>
        <label className="control-label pt-2">5. ¿Qué es lo más importante en el combate de incendios?</label>
        <select
          className="form-control myInput"
          name='5_combate_incendios'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Apagarlo lo más pronto posible y salvar más áreas forestales.</option>
          <option value='b'>b) Evitar que se propague a una zona urbana.</option>
          <option value='c'>c) La seguridad del personal que está trabajando en el incendio.</option>
        </select>
      </div>

      {/* 6. ¿Qué significa VCRZ? */}
      <div className='col-12'>
        <label className="control-label pt-2">6. ¿Qué significa VCRZ?</label>
        <select
          className="form-control myInput"
          name='6_significa_vcrz'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) VERACRUZ.</option>
          <option value='b'>b) Vigías, Cargadores, Retos y Zonas de Seguridad.</option>
          <option value='c'>c) Vías, Comunicadores, Ríos y Zonas.</option>
          <option value='d'>d) Vigilantes, Comunicaciones, Rutas de Escape y Zonas de Seguridad.</option>
        </select>
      </div>

      {/* 7. ¿Qué es la carga de combustible? */}
      <div className='col-12'>
        <label className="control-label pt-2">7. ¿Qué es la carga de combustible?</label>
        <select
          className="form-control myInput"
          name='7_carga_combustible'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Cantidad de combustible en un área expresado en ton/ha.</option>
          <option value='b'>b) Lo que pesa un árbol o un arbusto.</option>
          <option value='c'>c) La madera que se pueda aprovechar en un bosque.</option>
        </select>
      </div>

      {/* 8. Una línea de control son todas las barreras del fuego, construidas o naturales y aquellas en las que se han tratado los bordes del fuego para controlarlo. */}
      <div className='col-12'>
        <label className="control-label pt-2">8. Una línea de control son todas las barreras del fuego, construidas o naturales y aquellas en las que se han tratado los bordes del fuego para controlarlo.</label>
        <select
          className="form-control myInput"
          name='8_linea_control'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Verdadero.</option>
          <option value='b'>b) Falso.</option>
        </select>
      </div>

      {/* 9. Movimiento del incendio, expresado en longitud por unidad de tiempo */}
      <div className='col-12'>
        <label className="control-label pt-2">9. Movimiento del incendio, expresado en longitud por unidad de tiempo</label>
        <select
          className="form-control myInput"
          name='9_movimiento_incendio'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Intensidad calorífica.</option>
          <option value='b'>b) Propagación.</option>
          <option value='c'>c) Radiación.</option>
          <option value='d'>d) Contrafuego.</option>
        </select>
      </div>

      {/* 10. Es la fuente de energía que conduce el incendio. */}
      <div className='col-12'>
        <label className="control-label pt-2">10. Es la fuente de energía que conduce el incendio.</label>
        <select
          className="form-control myInput"
          name='10_conduce_incendio'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Oxigeno.</option>
          <option value='b'>b) Combustible.</option>
          <option value='c'>c) Topografía.</option>
          <option value='d'>d) Calor.</option>
        </select>
      </div>

      {/* 11. La topografía es el elemento más variable de la gran triada. */}
      <div className='col-12'>
        <label className="control-label pt-2">11. La topografía es el elemento más variable de la gran triada.</label>
        <select
          className="form-control myInput"
          name='11_topografia_elemento'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Verdadero.</option>
          <option value='b'>b) Falso.</option>
        </select>
      </div>

      {/* 12. Este elemento es variable, a lo largo del tiempo y en el espacio, varía por razones como: estación del año, humedad, temperatura y altitud. */}
      <div className='col-12'>
        <label className="control-label pt-2">12. Este elemento es variable, a lo largo del tiempo y en el espacio, varía por razones como: estación del año, humedad, temperatura y altitud.</label>
        <select
          className="form-control myInput"
          name='12_elemento_variable'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Oxigeno</option>
          <option value='b'>b) Combustible</option>
          <option value='c'>c) Topografía</option>
          <option value='d'>d) Calor</option>
        </select>
      </div>

      {/* 13. Referente al combustible, el elemento más importante para pronosticar el comportamiento del fuego es: */}
      <div className='col-12'>
        <label className="control-label pt-2">13. Referente al combustible, el elemento más importante para pronosticar el comportamiento del fuego es:</label>
        <select
          className="form-control myInput"
          name='13_referente_combustible'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) La carga total del combustible.</option>
          <option value='b'>b) El combustible disponible.</option>
          <option value='c'>c) Las altas temperaturas.</option>
          <option value='d'>d) El Clima.</option>
        </select>
      </div>

      {/* 14. Cuál de los tipos de combustibles responden más rápido a la humedad relativa */}
      <div className='col-12'>
        <label className="control-label pt-2">14. Cuál de los tipos de combustibles responden más rápido a la humedad relativa</label>
        <select
          className="form-control myInput"
          name='14_tipos_combustible'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Combustibles de 100 horas.</option>
          <option value='b'>b) Combustibles de 10 horas.</option>
          <option value='c'>c) Combustibles de 1 horas.</option>
          <option value='d'>d) Combustible de 1,000 horas.</option>
        </select>
      </div>

      {/* 15. La cantidad de agua en un combustible, expresado como porcentaje del peso del combustible secado en un horno. */}
      <div className='col-12'>
        <label className="control-label pt-2">15. La cantidad de agua en un combustible, expresado como porcentaje del peso del combustible secado en un horno.</label>
        <select
          className="form-control myInput"
          name='15_agua_combustible'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Humedad del combustible.</option>
          <option value='b'>b) Humedad relativa.</option>
          <option value='c'>c) Índice de secado.</option>
        </select>
      </div>

      {/* 16. Existen principalmente cuatro denominadores comunes en el comportamiento de incendios fatales y casi fatales. Estos incendios ocurren comúnmente: */}
      <div className='col-12'>
        <label className="control-label pt-2">16. Existen principalmente cuatro denominadores comunes en el comportamiento de incendios fatales y casi fatales. Estos incendios ocurren comúnmente:</label>
        <select
          className="form-control myInput"
          name='16_denominadores_comunes'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) En incendios relativamente pequeños o en áreas aisladas de incendios grandes.</option>
          <option value='b'>b) En combustibles ligeros, tales como pastos, hierbas y matorral  ligero.</option>
          <option value='c'>c) Cuando el incendio responde a las condiciones topográficas y se propaga cuesta arriba.</option>
          <option value='d'>d) Cuando hay un cambio inesperado en la dirección o en la velocidad del viento.</option>
          <option value='e'>e) Todos los anteriores.</option>
        </select>
      </div>

      {/* 17. Son lugares donde el combatiente que está en peligro puede encontrar refugio */}
      <div className='col-12'>
        <label className="control-label pt-2">17. Son lugares donde el combatiente que está en peligro puede encontrar refugio</label>
        <select
          className="form-control myInput"
          name='17_lugares_combatiente'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Rutas de escape.</option>
          <option value='b'>b) Área de espera.</option>
          <option value='c'>c) Zonas de seguridad.</option>
          <option value='d'>d) Puesto de mando.</option>
          <option value='e'>e) Todas las anteriores.</option>
        </select>
      </div>

      {/* 18. Es el nivel mínimo de control de peligro que  debe estar establecido antes de tomar la decisión de combatir incendio. */}
      <div className='col-12'>
        <label className="control-label pt-2">18. Es el nivel mínimo de control de peligro que  debe estar establecido antes de tomar la decisión de combatir incendio.</label>
        <select
          className="form-control myInput"
          name='18_nivel_minimo'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Mirar arriba, abajo y a los lados.</option>
          <option value='b'>b) VCRZ.</option>
          <option value='c'>c) 18 situaciones que gritan cuidado.</option>
          <option value='d'>d) 10 normas de combate.</option>
        </select>
      </div>

      {/* 19. Acción de conocer directamente en el lugar, qué es lo que está sucediendo a fin de actuar en consecuencia. */}
      <div className='col-12'>
        <label className="control-label pt-2">19. Acción de conocer directamente en el lugar, qué es lo que está sucediendo a fin de actuar en consecuencia.</label>
        <select
          className="form-control myInput"
          name='19_accion_conocer'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Reconocimiento.</option>
          <option value='b'>b) Evaluacion.</option>
          <option value='c'>c) Planificación.</option>
        </select>
      </div>

      {/* 20. Es la cantidad de humedad en el aire expresada en porcentaje */}
      <div className='col-12'>
        <label className="control-label pt-2">20. Es la cantidad de humedad en el aire expresada en porcentaje</label>
        <select
          className="form-control myInput"
          name='20_cantidad_humedad'
          type=''
          onChange={setInfo}
        >
          <option value='x' >---Seleccione---</option>
          <option value='a'>a) Humedad del combustible.</option>
          <option value='b'>b) Humedad relativa.</option>
          <option value='c'>c) Precipitación.</option>
        </select>
      </div>

    </div>
  );
}

export default S190;