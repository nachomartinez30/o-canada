import React, { useState } from 'react'
import logo_incedios from '../assets/logo_incendios.svg'
import logo_conafor from '../assets/logo_cnf.svg'
import logo_semarnat from '../assets/logo_semarnat.svg'
import serpiente_amarilla from '../assets/serpiente_amarilla.svg'
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FcAssistant, FcVoicePresentation } from "react-icons/fc";
import { Button, Modal } from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'

const Header = () => {
    const [mostrarMesaAyuda, setMostrarMesaAyuda] = useState(false)
    return (
        <>
            <nav className="navbar px-5 row">
                <div className="col-3 col-md-3 order-3 order-md-1">
                    <img
                        src={logo_incedios}
                        // width={80}
                        //height={100}
                        className="d-inline-block align-top top-logo wi-100"
                        alt='logo_incedios'
                    />
                </div>
                <div className="col-6 col-md-3 order-1 order-md-2">
                    <img
                        src={logo_semarnat}
                        // width={80}
                        //height={70}
                        className="d-inline-block align-top top-logo wi-100"
                        alt='logo_semarnat'
                    />
                </div>
                <div className="col-6 col-md-3 order-2 order-md-3">
                    <img
                        src={logo_conafor}
                        // width={80}
                        //height={100}
                        className="d-inline-bl<ock align-top top-logo wi-100"
                        alt='logo_conafor'
                    />
                </div>
                <div className="col-3 col-md-3 order-4 order-md-4">
                    <img
                        src={serpiente_amarilla}
                        // width={80}
                        //height={100}
                        className="d-inline-block align-top top-logo wi-100"
                        alt='serpiente_amarilla'
                    />
                </div>
            </nav>
            <div className="text-right">
                <Button variant='primary' onClick={() => setMostrarMesaAyuda(true)} className="ayudaStyle">
                    Ayuda <BsFillQuestionSquareFill />
                </Button>

                {/* DATOS MESA DE AYUDA */}
                <Modal show={mostrarMesaAyuda} onHide={() => setMostrarMesaAyuda(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Asistencia</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='px-5'>
                            <p>
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <FcAssistant />
                                </IconContext.Provider>
                                 Si tiene alguna <b>falla</b> respecto al <b>sistema</b>, puede comunicarse
                                directamente a la Mesa de Ayuda marcando al teléfono
                                <b>(33)3777-7000</b> extensión <b>4505</b>.
                        </p>
                        </div>
                        <div className='px-5'>
                            <p>
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <FcVoicePresentation />
                                </IconContext.Provider>
                                 Si tiene alguna duda respecto a <b>como capturar un campo</b> comuniquese directamente:
                            </p>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="newDanger" variant="danger" onClick={() => setMostrarMesaAyuda(false)}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Header;