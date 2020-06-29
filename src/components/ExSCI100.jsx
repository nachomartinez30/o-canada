import React from 'react'

const SCI100 = (props) => {
    const { state, setState  } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }
    return (
        <div className='row'>
            {/* 1. Para asegurar la comunicación eficaz y clara, el SCI requiere el uso de: */}
            <div className='col-12'>
                <label className="control-label pt-2">1. Para asegurar la comunicación eficaz y clara, el SCI requiere el uso de:</label>
                <select
                    className="form-control myInput"
                    name='1_asegurar_comunicacion'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Claves de Radio.</option>
                    <option value='b'>b) Códigos específicos de la Dependencia-Instancia.</option>
                    <option value='c'>c) Terminología común.</option>
                    <option value='d'>d) Lenguaje técnico.</option>
                </select>
            </div>

            {/* 2. Usted está implementando las actividades tácticas para lograr los objetivos del incidente. ¿Cuál es el título del puesto correcto del elemento organizacional del SCI en el cual usted está asignado? */}
            <div className='col-12'>
                <label className="control-label pt-2">2. Usted está implementando las actividades tácticas para lograr los objetivos del incidente. ¿Cuál es el título del puesto correcto del elemento organizacional del SCI en el cual usted está asignado?</label>
                <select
                    className="form-control myInput"
                    name='2_implementando_actividades'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Sección de Tácticas.</option>
                    <option value='b'>b) Sección de Operaciones.</option>
                    <option value='c'>c) Sección de Planificación.</option>
                    <option value='d'>d) División de Planificación.</option>
                </select>
            </div>

            {/* 3. Las actividades principales de la Sección de Planificación incluyen: */}
            <div className='col-12'>
                <label className="control-label pt-2">3. Las actividades principales de la Sección de Planificación incluyen:</label>
                <select
                    className="form-control myInput"
                    name='3_actividades_principales'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Proporcionar la tecnología para asegurar la comunicación eficaz del incidente.</option>
                    <option value='b'>b) Establece y mantiene las instalaciones del incidente.</option>
                    <option value='c'>c) Prepara y documenta los Planes de Acción del Incidente (PAI).</option>
                    <option value='d'>d) Pagar o compensar las lesiones y daños ocasionados a la propiedad Privada por acciones de Combate.</option>
                </select>
            </div>

            {/* 4. La primera tarea del personal de respuesta después de ser despachado y al arribar al sitio del incidente, donde ya lo atiende un Comandante de Incidente, es: */}
            <div className='col-12'>
                <label className="control-label pt-2">4. La primera tarea del personal de respuesta después de ser despachado y al arribar al sitio del incidente, donde ya lo atiende un Comandante de Incidente, es:</label>
                <select
                    className="form-control myInput"
                    name='4_primera_tarea_personal'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Buscar los posibles sobrevivientes del incidente.</option>
                    <option value='b'>b) Registrarse y recibir una asignación.</option>
                    <option value='c'>c) Ubicar y asistir al personal asignado.</option>
                    <option value='d'>d) Registrar y reportar la asignación del recurso.</option>
                </select>
            </div>

            {/* 5. ¿Cuál es la instalación del incidente donde el personal y el equipo se mantienen en espera para recibir asignaciones tácticas? */}
            <div className='col-12'>
                <label className="control-label pt-2">5. ¿Cuál es la instalación del incidente donde el personal y el equipo se mantienen en espera para recibir asignaciones tácticas?</label>
                <select
                    className="form-control myInput"
                    name='5_instalacion_incidente'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Puesto del Mando el Incidente.</option>
                    <option value='b'>b) Base.</option>
                    <option value='c'>c) Campamento.</option>
                    <option value='d'>d) Área de Espera.</option>
                </select>
            </div>

            {/* 6. La diferencia entre un Equipo de Intervención y una Fuerza de Tarea es: */}
            <div className='col-12'>
                <label className="control-label pt-2">6. La diferencia entre un Equipo de Intervención y una Fuerza de Tarea es:</label>
                <select
                    className="form-control myInput"
                    name='6_equipo_intervencion'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Los Equipos de Intervención se reportan a un Oficial mientras una Fuerza de Tarea se reporta a un Líder.</option>
                    <option value='b'>b) Los Equipos de Intervención están dentro la Sección de Operaciones mientras las Fuerzas de Tarea están dentro de la Sección de Planificación.</option>
                    <option value='c'>c) Los Equipos de Intervención tienen recursos similares mientras  las Fuerzas de Tarea contienen recursos mixtos.</option>
                    <option value='d'>d) Los Equipos de Intervención tienen un rango de alcance de control más bajo comparado con las Fuerzas de Tarea.</option>
                </select>
            </div>

            {/* 7. Usted está trabajando en un incidente complejo. Hay múltiples Comandantes del Incidente representado múltiples jurisdicciones trabando juntos para establecer los objetivos del incidente. ¿Qué tipos de estructura del SCI se está usando? */}
            <div className='col-12'>
                <label className="control-label pt-2">7. Usted está trabajando en un incidente complejo. Hay múltiples Comandantes del Incidente representado múltiples jurisdicciones trabando juntos para establecer los objetivos del incidente. ¿Qué tipos de estructura del SCI se está usando?</label>
                <select
                    className="form-control myInput"
                    name='7_incidente_complejo'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Comando Múltiple.</option>
                    <option value='b'>b) Comando de Área.</option>
                    <option value='c'>c) Mando Mutuo.</option>
                    <option value='d'>d) Comando Unificado.</option>
                </select>
            </div>

            {/* 8. ¿Qué es lo que debe usted hacer, al retirarse de un incidente? */}
            <div className='col-12'>
                <label className="control-label pt-2">8. ¿Qué es lo que debe usted hacer, al retirarse de un incidente?</label>
                <select
                    className="form-control myInput"
                    name='8_retirarse_incidente'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Completar todas las tareas, formatos y reportes requeridos.</option>
                    <option value='b'>b) Informar a sus remplazos, subordinados, y supervisor.</option>
                    <option value='c'>c) Regresar cualquier equipo proporcionado por el incidente u otros suministros no desechables.</option>
                    <option value='d'>d) Todas las anteriores.</option>
                </select>
            </div>

            {/* 9. Alcance de Control se refiere a: */}
            <div className='col-12'>
                <label className="control-label pt-2">9. Alcance de Control se refiere a:</label>
                <select
                    className="form-control myInput"
                    name='9_alcance_control'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) El proceso de mover la responsabilidad de un Comandante del Incidente a otro.</option>
                    <option value='b'>b) El acto de dirigir, solicitar, y controlar por virtud de autoridad  explicita legal, regulatoria y delegada.</option>
                    <option value='c'>c) Una línea ordenada de autoridad que existe dentro de los rangos de la organización de manejo del incidente.</option>
                    <option value='d'>d) El número de individuos o recursos que un supervisor puede manejar con eficacia durante un incidente.</option>
                </select>
            </div>

            {/* 10. ¿Cuál de las siguientes entidades organizacionales dentro la Sección de Operaciones se puede usar para dividir el incidente geográficamente? */}
            <div className='col-12'>
                <label className="control-label pt-2">10. ¿Cuál de las siguientes entidades organizacionales dentro la Sección de Operaciones se puede usar para dividir el incidente geográficamente?</label>
                <select
                    className="form-control myInput"
                    name='10_entidades_organizacionales'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Regimientos.</option>
                    <option value='b'>b) Unidades.</option>
                    <option value='c'>c) Grupos.</option>
                    <option value='d'>d) Divisiones.</option>
                </select>
            </div>

            {/* 11. El Sistema de Comando de Incidentes es: */}
            <div className='col-12'>
                <label className="control-label pt-2">11. El Sistema de Comando de Incidentes es:</label>
                <select
                    className="form-control myInput"
                    name='11_sistema_comando'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Un sistema militar usado en incidentes domésticos para asegurar el mando y control de recursos federales.</option>
                    <option value='b'>b) Un concepto estandarizado para el manejo de incidentes que es aplicable para usar en todo riesgo.</option>
                    <option value='c'>c) Un concepto relativamente nuevo creado base las lecciones aprendidas de los ataques de terrorismo de 9/11 de Estados Unidos de América.</option>
                    <option value='d'>d) Mas aplicable para el manejo de incidentes complejos que se extienden por  muchas horas o días.</option>
                </select>
            </div>

            {/* 12. Contiene información sobre objetivos y la situación del incidente y resumen de acciones actuales para informar al Comandante de Incidente de reemplazo o equipo, u otros recursos. */}
            <div className='col-12'>
                <label className="control-label pt-2">12. Contiene información sobre objetivos y la situación del incidente y resumen de acciones actuales para informar al Comandante de Incidente de reemplazo o equipo, u otros recursos.</label>
                <select
                    className="form-control myInput"
                    name='12_contiene_informacion'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Formato SCI-210</option>
                    <option value='b'>b) Formato SCI-201</option>
                    <option value='c'>c) Formato SCI-211</option>
                    <option value='d'>d) Formato SCI-214</option>
                </select>
            </div>

            {/* 13. Los Recursos en las Áreas de Espera: */}
            <div className='col-12'>
                <label className="control-label pt-2">13. Los Recursos en las Áreas de Espera:</label>
                <select
                    className="form-control myInput"
                    name='13_recursos_areas'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Son manejados por la Sección de Logística.</option>
                    <option value='b'>b) Incluyen recursos fuera de servicio que se están preparando para ser desplegados.</option>
                    <option value='c'>c) Se encuentran esperando una asignación operacional.</option>
                    <option value='d'>d) Incluyen aquellos que se están preparando para la desmovilización y regreso a sus jurisdicciones.</option>
                </select>
            </div>

            {/* 14. La Reunión Informativa del Periodo Operacional: */}
            <div className='col-12'>
                <label className="control-label pt-2">14. La Reunión Informativa del Periodo Operacional:</label>
                <select
                    className="form-control myInput"
                    name='14_reunion_informativa'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Ayuda mantener el público y los medios de prensa informados de la situación del incidente y los logros operacionales.</option>
                    <option value='b'>b) Proporciona una orientación para elaborar el plan de acción del incidente.</option>
                    <option value='c'>c) Presenta el Plan de Acción del Incidente para el próximo periodo al personal de supervisión.</option>
                    <option value='d'>d) Identifica las áreas específicas, establece los procedimientos de reporte y expectativas para el personal del apoyo.</option>
                </select>
            </div>

            {/* 15. Documento que proporciona un medio coherente de comunicación de los objetivos generales del incidente en los contextos de ambas actividades operacionales y de apoyo: */}
            <div className='col-12'>
                <label className="control-label pt-2">15. Documento que proporciona un medio coherente de comunicación de los objetivos generales del incidente en los contextos de ambas actividades operacionales y de apoyo:</label>
                <select
                    className="form-control myInput"
                    name='15_documento_proporciona'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Plan DNIII.</option>
                    <option value='b'>b) Plan de acción y comunicación.</option>
                    <option value='c'>c) Plan de acción del incidente.</option>
                    <option value='d'>d) Plan de desarrollo.</option>
                </select>
            </div>

            {/* 16. Formato en el cual se encuentran el plan de comunicación */}
            <div className='col-12'>
                <label className="control-label pt-2">16. Formato en el cual se encuentran el plan de comunicación</label>
                <select
                    className="form-control myInput"
                    name='16_formato_encuentran'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Formato SCI 201.</option>
                    <option value='b'>b) Formato SCI 205.</option>
                    <option value='c'>c) Formato SCI 210.</option>
                    <option value='d'>d) Formato SCI 215.</option>
                </select>
            </div>

            {/* 17. Formato en el cual se encuentran el nombre y distancia de los hospitales cercanos al incidente */}
            <div className='col-12'>
                <label className="control-label pt-2">17. Formato en el cual se encuentran el nombre y distancia de los hospitales cercanos al incidente</label>
                <select
                    className="form-control myInput"
                    name='17_formato_hospitales'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Formato SCI 206.</option>
                    <option value='b'>b) Formato SCI 207.</option>
                    <option value='c'>c) Formato SCI 209.</option>
                    <option value='d'>d) Formato SCI 210.</option>
                </select>
            </div>

            {/* 18. Formato en el cual se encuentran las asignaciones de trabajo */}
            <div className='col-12'>
                <label className="control-label pt-2">18. Formato en el cual se encuentran las asignaciones de trabajo</label>
                <select
                    className="form-control myInput"
                    name='18_formato_trabajo'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Formato SCI 206.</option>
                    <option value='b'>b) Formato SCI 201.</option>
                    <option value='c'>c) Formato SCI 211.</option>
                    <option value='d'>d) Formato SCI 204.</option>
                </select>
            </div>

            {/* 19. Sección del Plan de Acción del Incidente donde se puede ubicar los procedimientos en caso de accidentes */}
            <div className='col-12'>
                <label className="control-label pt-2">19. Sección del Plan de Acción del Incidente donde se puede ubicar los procedimientos en caso de accidentes</label>
                <select
                    className="form-control myInput"
                    name='19_plan_accion'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Información del Incidente.</option>
                    <option value='b'>b) Organigrama.</option>
                    <option value='c'>c) Plan Médico.</option>
                    <option value='d'>d) Plan de Radio Comunicaciones del Incidente.</option>
                </select>
            </div>

            {/* 20. Sección del Plan de Acción del Incidente donde se puede encontrar la estructura y posiciones del personal asignado al incidente. */}
            <div className='col-12'>
                <label className="control-label pt-2">20. Sección del Plan de Acción del Incidente donde se puede encontrar la estructura y posiciones del personal asignado al incidente.</label>
                <select
                    className="form-control myInput"
                    name='20_asignado_incidente'
                    type=''
                    onChange={setInfo}
                >
                    <option value='x' >---Seleccione---</option>
                    <option value='a'>a) Información del Incidente.</option>
                    <option value='b'>b) Objetivos del Incidente.</option>
                    <option value='c'>c) Organigrama.</option>
                    <option value='d'>d) Lista de Registro.</option>
                </select>
            </div>

        </div>
    );
}

export default SCI100;