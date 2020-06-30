import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons/lib';
import { FcAssistant, FcVoicePresentation } from 'react-icons/fc';

const DatosAyuda = ({ setShow, show }) => {

    const contactosIncendios = [
        { region: 'Noroeste', nombre: 'Rodrigo Contreras Armenta', telefono: '01(622) 218 33 42', celular: '045(662) 299 75 66', extension: '7100', correo: 'rcontreras@conafor.gob.mx' },
        { region: 'Noroeste', nombre: 'Rodrigo Contreras Armenta', telefono: '01(622) 218 33 42', celular: '045(662) 299 75 66', extension: '7100', correo: 'rcontreras@conafor.gob.mx' },
        { region: 'Norte', nombre: 'Oscar René Domínguez Moreno', telefono: '01(618) 8279833', celular: '045(618) 176 26 91', extension: '6850', correo: 'odominguez@conafor.gob.mx' },
        { region: 'Noreste', nombre: 'Jorge Alberto Serna Zamarron', telefono: '01(844) 488 35 00   ||   01(844) 488 16 68', celular: '045(444) 140 88 88', extension: '6900', correo: 'jorge.serna@conafor.gob.mx' },
        { region: 'Occidente', nombre: 'Martín Delgadillo Rosas', telefono: '01(341) 413 64 01   ||   01(341) 413 64 78', celular: '045(311) 107 71 16', extension: '6800', correo: 'mdelgadillo@conafor.gob.mx' },
        { region: 'Centro', nombre: 'Ismael Solórzano Ibarra', telefono: '01(222) 291 43 77   ||   01(222) 291 46 66', celular: '045(222) 564 66 26', extension: '6950', correo: 'isolorzano@conafor.gob.mx' },
        { region: 'Sureste', nombre: 'Pánfilo Fernández Flores', telefono: '01(981) 811 4417', celular: '045(981) 207 59 00   ||   01(981) 817 24 98', extension: '6750', correo: 'pfernandez@conafor.gob.mx' },
    ]
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton className="colorInst">
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
                                <b>(33)3777-7000</b> ext. <b>4505</b>, <b>4425</b> o <b>4508</b>.
                    </p>
                </div>
                <hr />
                <div className='px-5'>
                    <p>
                        <IconContext.Provider value={{ size: "2em" }}>
                            <FcVoicePresentation />
                        </IconContext.Provider>
                                 Si tiene alguna duda respecto a <b>como capturar un campo</b> comuniquese directamente:
                        <br />
                        <br />
                        {/* <br /> */}
                        <div className='table-responsive'>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">REGIÓN</th>
                                        <th scope="col">NOMBRE</th>
                                        <th scope="col">TEL. DIRECTO</th>
                                        <th scope="col">Cel. / Particular</th>
                                        <th scope="col">EXT.</th>
                                        <th scope="col">CORREO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contactosIncendios.map((item) => <tr>
                                        <th scope="row">{item.region}</th>
                                        <td>{item.nombre}</td>
                                        <td>{item.telefono}</td>
                                        <td>{item.celular}</td>
                                        <td>{item.extension}</td>
                                        <td><a href={`mailto:${item.correo}`}>{item.correo}</a></td>
                                    </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </p>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button className="newDanger" variant="danger" onClick={() => setShow(false)}>
                    Cerrar
                        </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default DatosAyuda;