import React, { useState, useEffect } from 'react'
import ConstanciaRegistro from './ConstanciaRegistro'


const Finalizar = (props) => {
    const { state, photo } = props
    const [mensaje, setMensaje] = useState('')
    const [secciones, setSecciones] = useState({
        pasaporte_vigente: false,
        documento_para_viajar_a_canad: true,
        licencia_de_manejo: false,
        indice_de_masa_corporal: false,
        salud: false,
        conocimiento_y_experiencia_sci: false,
        conocimiento_y_experiencia_en_incendios: true,
        buena_conducta: false,
        disponibilidad_en_condiciones_ambientales_adversas: false,
        capacidad_para_comunicarse_en_ingles: true,
        liderazgo: false,
        aptitud_fisica: false,
        gps: false,
        motobomba_mark_iii: false
    })
    const [showPDF, setShowPDF] = useState(false)

    const getMensaje = () => {
        switch (state.motivo_rechazo) {
            case 'candidato menor de edad':
                setMensaje("No es posible continuar con el proceso debido a que la edad mínima requerida es de 21 años")
                break;
            case 'carta de antecedentes mayor a 2 meses':
                setMensaje("No es posible continuar con el proceso debido a que la fecha del documento es mayor a 2 meses")
                break;
            case 'pasaporte vence en menos de 8 meses':
                setMensaje("No es posible continuar ya que no cumple con la vigencia de 8 meses del  Pasaporte")
                break;
            case 'eta/visa vence en menos de 8 meses':
                setMensaje("No es posible continuar ya que no cumple con la vigencia de 8 meses de eTA/VISA.")
                break;
            case 'imc mayo 30':
                setMensaje("No es posible continuar con el proceso debido a que su IMC es superior a 30")
                break;
            case 'certificado toxicológico excede los 15 dias':
                setMensaje("No es posible continuar con el proceso debido a que la fecha de su Certificado toxicológico es mayor a 15 días")
                break;
            case 'certificado médico excede 1 mes':
                setMensaje("No es posible continuar con el proceso debido a que la fecha de su Certificado médico es mayor a 1 mes")
                break;
            case 'problemas de salud':
                setMensaje("No es posible continuar con el proceso debido a que por el resultado de su autoevaluación.        No cumple con los requisitos mínimos para realizar la prueba de la mochila nivel arduo.")
                break;
            case 'no aprobo examen smi_100':
                setMensaje("No es posible continuar con el proceso debido a que no aprobó con el 70% minimo del examen de conocimientos del SCI 100-200 requerido")
                break;
            case 'no aprobo examen si_190':
                setMensaje("No es posible continuar con el proceso debido a que no aprobó con el 70% minimo del examen de conocimientos del S-190, S-130.")
                break;
            case 'falta de habilidad o competencia':
                setMensaje("No es posible continuar con el proceso debido a que la operación autónoma del GPS y Bomba Mark 3, es una condicionante requerida")
                break;
            case 'no cuenta con equipo completo':
                setMensaje("No es posible continuar con el proceso debido a que no cuenta con el equipo mínimo requerido para su trabajo en condiciones ambientales adversas")
                break;
            case null:
                setMensaje("Finalizó su proceso de registro.¡¡¡ Prepárese para atender la convocatoria para realizar las pruebas físicas y de habilidades!!!    .Deberá presentarse con documentos anexados en original para su cotejo y el equipo requerido para trabajar en condiciones ambientales adversas.")
                break;
            default: setMensaje(`Error`)
                break;
        }
    }

    const mostrarPDF = () => {
        setShowPDF(true)
    }

    useEffect(() => {
        getMensaje()
    }, [mensaje])

    return (
        <>
            <div className='container pb-4'>
                <h2>{mensaje}</h2>
                <div className='py-3'>
                    <button
                        className='btn btn-success  py-3'
                        onClick={mostrarPDF}
                    >
                        Obtener Constancia
                    </button>
                </div>
            </div>
            {showPDF && <ConstanciaRegistro
                sections={secciones}
                photo={photo}
                state={state}
            />}
        </>
    );
}

export default Finalizar;