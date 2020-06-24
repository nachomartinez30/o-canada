import React from 'react'
import AvisoPrivacidad from './AvisoPrivacidad'

const TerminosAviso = ({ aceptarTerminos, setAceptarTerminos, sendTerminos, setShowTerminosCondiciones }) => {


    const checkTerminos = (input) => {
        setAceptarTerminos(input.target.checked)
    }

    const regresar = () => {
        setAceptarTerminos(false)
        setShowTerminosCondiciones(false)
    }

    return (
        <div className='container' style={{ alignContent: 'right' }}>
            <h1>Términos y condiciones</h1>
            <br />
            <br />
            <br />
            <p className='display-5'>
                Manifiesto que los datos proporcionados son veraces para corroborar mi identidad como usuario así como
                para mantener mi seguridad e integridad, y proporcionar información adicional que se requiera, de igual
                forma voluntariamente llevo a cabo mi registro.
            </p>

            <p className='display-5'>
                Hago constar mediante mi aceptación en este apartado, que lo que registre en este sistema es verdad y poseo los documentos probatorios que acrediten lo descrito y que el seguimiento posterior a mi registro es <b><text className='text-danger'>mi responsabilidad</text></b>.
            </p>

            <p className='display-5'>
                Por otra parte, acepto y reconozco que deberé actuar siempre conforme a los  valores en el manejo del fuego: integridad, deber y respeto, lo cual incluye, buscar oportunidades de mejora, ser competente en mi trabajo, tener y desarrollar habilidades de líder, tomar decisiones adecuadas, construir al equipo y aplicar medidas de disciplina por igual.
            </p>

            <p>La Comisión Nacional Forestal, recaba los datos personales que usted registra de acuerdo al <a href='https://www.conafor.gob.mx/transparencia/avisoPrivacidad.html'>Aviso de Privacidad Integral</a> que en este acto se le da a conocer.
            </p>

            <br />
            <br />
            <br />
            <AvisoPrivacidad />

            <div className="custom-control custom-checkbox mb-3 pt-5" style={{ textAlign: 'right' }}>
                <input
                    onChange={checkTerminos}
                    checked={aceptarTerminos}
                    type="checkbox"
                    className="custom-control-input "
                    id="customCheck"
                    name="example1"
                />
                <label className="custom-control-label" htmlFor="customCheck">He leído y acepto los términos de la convocatoria.</label>
            </div>

            {aceptarTerminos &&
                <div style={{ textAlign: 'right' }}>
                    <button
                        onClick={sendTerminos}
                        className='btn btn-info py-3 px-3'
                    >
                        Continuar
                </button>
                </div>
            }
            <button
                className='btn btn-danger py-3 px-3'
                onClick={regresar}
            >Regresar</button>
        </div>
    );
}

export default TerminosAviso;