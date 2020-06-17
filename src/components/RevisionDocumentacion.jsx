import React, { useState, useEffect } from 'react'
import lodash from 'lodash'
import { ButtonGroup, Button, Nav } from 'react-bootstrap'
import axios from 'axios'
import AlertError from '../singles/AlertError'
import DataTable from 'react-data-table-component'
import PDFViewer from 'pdf-viewer-reactjs'


const API_REQUEST = process.env.REACT_APP_BACKEN_URL
const URL_documentos = process.env.REACT_APP_BACKEND_DOCS

const RevisionDocumentacion = () => {
    const [candidatos, setCandidatos] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    const [showPDF, setShowPDF] = useState(false)
    const [reload, setReload] = useState(true)
    const [linkDocumento, setLinkDocumento] = useState('carta_antecedentes')


    const getCandidatos = async () => {
        const url = `${API_REQUEST}revision_region`;
        try {
            const respuesta = await axios.post(url, { region: 99 })
            if (respuesta.status === 200) {
                setCandidatos(respuesta.data);
                setDatosTabla(respuesta.data)
            } else {
                AlertError('Error', respuesta.data);
            }
        } catch (error) {
            AlertError('Error:', error)
        }
    }



    useEffect(() => {
        getCandidatos();
        /* TODO: terminar buscador en tabla */
        setReload(false)
    }, [reload])

    const mostrarDocumento = (documento) => {
        setLinkDocumento(documento)
        setShowPDF(true)
    }


    /* Edicion de la tabla */
    const [loading, setLoading] = React.useState(false);
    const [directionValue, setDirectionValue] = React.useState('auto');

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

    const SampleExpandedComponent = ({ data }) => (
        <div className='py-5'>
            <Nav justify variant="pills" defaultActiveKey="">
                <Nav.Item>
                    <Nav.Link eventKey="carta_antecedentes" onClick={() => mostrarDocumento('carta_antecedentes')}>carta_antecedentes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="cert_medico" onClick={() => mostrarDocumento('cert_medico')}>cert_medico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="cert_toxicologico" onClick={() => mostrarDocumento('cert_toxicologico')}>cert_toxicologico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="eTA" onClick={() => mostrarDocumento('eTA')}>eTA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fotografia" onClick={() => mostrarDocumento('fotografia')}>fotografia</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="licencia_manejo" onClick={() => mostrarDocumento('licencia_manejo')}>licencia_manejo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="l_280_file" onClick={() => mostrarDocumento('l_280_file')}>l_280_file</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pasaporte_archivo" onClick={() => mostrarDocumento('pasaporte_archivo')}>pasaporte_archivo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sci_smi_100" onClick={() => mostrarDocumento('sci_smi_100')}>sci_smi_100</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sci_smi_200" onClick={() => mostrarDocumento('sci_smi_200')}>sci_smi_200</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_130" onClick={() => mostrarDocumento('s_130')}>s_130</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_190" onClick={() => mostrarDocumento('s_190')}>s_190</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_290_file" onClick={() => mostrarDocumento('s_290_file')}>s_290_file</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="toefl" onClick={() => mostrarDocumento('toefl')}>toefl</Nav.Link>
                </Nav.Item>
            </Nav>
            {showPDF &&
                <PDFViewer
                    navbarOnTop
                    document={{
                        url: `${URL_documentos}/${data.curp}/${linkDocumento}.pdf`,
                    }}
                />
            }
        </div>
    );

    const columns = [
        {
            name: 'CURP',
            selector: 'curp',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Nombres',
            selector: 'nombres',
            wrap: true,
            sortable: true
        },
        {
            name: 'Ap. paterno',
            selector: 'apellido_paterno',
            wrap: true,
            sortable: true
        },
        {
            name: 'Ap. materno',
            selector: 'apellido_materno',
            wrap: true,
            sortable: true
        },
        {
            name: 'Estado',
            selector: 'estado',
            wrap: true,
            sortable: true
        },
        {
            name: 'Tel.',
            selector: 'numero_telefonico_notificaciones',
            wrap: true,
            sortable: true
        },
        {
            name: 'Email',
            selector: 'correo_electronico',
            wrap: true,
            sortable: true
        },
        {
            name: 'Posición',
            selector: 'posicion_candidato',
            wrap: true,
            sortable: true
        },
        {
            name: 'sexo',
            selector: 'sexo',
            wrap: true,
            sortable: true
        },
        {
            name: 'anios_experiencia',
            selector: 'anios_experiencia',
            wrap: true,
            sortable: true
        }
    ]

    const findWord = (input) => {
        /* se previene los nulos */
        // const searchWord = (input.target.value) ? input.target.value : '';
        // if (searchWord) {
        //     let resBusqueda = lodash.find([...candidatos], (arreglo) => {
        //         const { curp, nombres, apellido_paterno, apellido_materno,
        //             estado, numero_telefonico_notificaciones, correo_electronico,
        //             posicion_candidato, sexo, anios_experiencia, imc, altura, peso, municipio,
        //             region
        //         } = arreglo
        //         return (
        //             curp.toLowerCase().includes(searchWord) ||
        //             nombres.toLowerCase().includes(searchWord) ||
        //             apellido_paterno.toLowerCase().includes(searchWord) ||
        //             apellido_materno.toLowerCase().includes(searchWord) ||
        //             estado.toLowerCase().includes(searchWord) ||
        //             numero_telefonico_notificaciones.toLowerCase().includes(searchWord) ||
        //             correo_electronico.toLowerCase().includes(searchWord) ||
        //             posicion_candidato.toLowerCase().includes(searchWord) ||
        //             sexo.toLowerCase().includes(searchWord) ||
        //             anios_experiencia.toLowerCase().includes(searchWord) ||
        //             imc.toLowerCase().includes(searchWord) ||
        //             altura.toLowerCase().includes(searchWord) ||
        //             peso.toLowerCase().includes(searchWord) ||
        //             municipio.toLowerCase().includes(searchWord) ||
        //             region.toLowerCase().includes(searchWord)
        //         )

        //     })
        // if (resBusqueda) {
        //     setDatosTabla(resBusqueda)
        //     setReload(true)
        // }
        // }
    }
    return (
        <div>
            <DataTable
                title="Candidatos"
                columns={columns}
                data={datosTabla}
                defaultSortField="Candidatos"
                expandableRows
                expandableRowsComponent={<SampleExpandedComponent />}
                pagination
                paginationComponentOptions
                persistTableHead
                progressPending={loading}
                subHeader
                subHeaderComponent={
                    (
                        <div>
                            <input className='form-control px-5'
                                placeholder='Buscar...'
                                onChange={findWord}
                            />
                        </div>
                    )
                }
                subHeaderAlign={'left'}
                direction={directionValue}
            />
        </div>
    );
}

export default RevisionDocumentacion;