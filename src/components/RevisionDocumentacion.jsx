import React, { useState, useEffect, useMemo } from 'react'
import lodash from 'lodash'
import { ButtonGroup, Button, Nav } from 'react-bootstrap'
import axios from 'axios'
import AlertError from '../singles/AlertError'
import DataTable from 'react-data-table-component'
// import PDFViewer from 'pdf-viewer-reactjs'
import AlertaSiguiente from "../singles/AlertaSiguiente";
import AlertExito from "../singles/AlertExito";


const API_REQUEST = process.env.REACT_APP_BACKEN_URL
const URL_documentos = process.env.REACT_APP_BACKEND_DOCS

const RevisionDocumentacion = () => {
    /* TODO: Acreditar revision de candidatos, terminar Searchbar */

    const [candidatos, setCandidatos] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    const [showPDF, setShowPDF] = useState(false)
    const [reload, setReload] = useState(true)
    const [selectedRows, setSelectedRows] = useState([]);
    const [linkDocumento, setLinkDocumento] = useState('carta_antecedentes')

    const [toggleCleared, setToggleCleared] = useState(false);

    /* Edicion de la tabla */
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
        setReload(false)
    }, [reload])

    const mostrarDocumento = (documento, data) => {
        const url = `${URL_documentos}/${data.curp}/${documento}.pdf`;
        debugger
        window.open(url, '_blank');
        // setLinkDocumento(documento)
        // setShowPDF(true)
    }

    const [loading, setLoading] = React.useState(false);
    const [directionValue, setDirectionValue] = React.useState('auto');

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

    const BotonesPDFs = ({ data }) => (
        <div className='py-5'>
            <Nav justify variant="pills" defaultActiveKey="">
                <Nav.Item>
                    <Nav.Link eventKey="carta_antecedentes" onClick={() => mostrarDocumento('carta_antecedentes', data)}>carta_antecedentes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="cert_medico" onClick={() => mostrarDocumento('cert_medico', data)}>cert_medico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="cert_toxicologico" onClick={() => mostrarDocumento('cert_toxicologico', data)}>cert_toxicologico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="eTA" onClick={() => mostrarDocumento('eTA', data)}>eTA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fotografia" onClick={() => mostrarDocumento('fotografia', data)}>fotografia</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="licencia_manejo" onClick={() => mostrarDocumento('licencia_manejo', data)}>licencia_manejo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="l_280_file" onClick={() => mostrarDocumento('l_280_file', data)}>l_280_file</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pasaporte_archivo" onClick={() => mostrarDocumento('pasaporte_archivo', data)}>pasaporte_archivo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sci_smi_100" onClick={() => mostrarDocumento('sci_smi_100', data)}>sci_smi_100</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sci_smi_200" onClick={() => mostrarDocumento('sci_smi_200', data)}>sci_smi_200</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_130" onClick={() => mostrarDocumento('s_130', data)}>s_130</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_190" onClick={() => mostrarDocumento('s_190', data)}>s_190</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="s_290_file" onClick={() => mostrarDocumento('s_290_file', data)}>s_290_file</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="toefl" onClick={() => mostrarDocumento('toefl', data)}>toefl</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* {showPDF &&
                <PDFViewer
                    navbarOnTop
                    document={{
                        url: `${URL_documentos}/${data.curp}/${linkDocumento}.pdf`,
                    }}
                />
            } */}
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
            selector: 'nom_ent',
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
            name: 'Años de experiencia',
            selector: 'anios_experiencia',
            wrap: true,
            sortable: true
        },
        {
            name: 'Estatus',
            selector: 'aprobado_regionles',
            conditionalCellStyles: [
                {
                    when: row => row.aprobado_regionles === 'aprobado',
                    style: {
                        backgroundColor: '#237819',
                        // fontSize: '20px',
                        color: '#FFFF',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                },
                {
                    when: row => row.aprobado_regionles === 'desaprobado',
                    style: {
                        backgroundColor: '#A01F3F',
                        // fontSize: '20px',
                        color: '#FFFF',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                }
            ],
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]

    const manejadorCambiosColumnas = state => {
        setSelectedRows(state.selectedRows);
    };

    const aprobarRegistros = async () => {
        const url = `${API_REQUEST}aprobar_cand_regionales`
        try {
            /* ENVIO DE AXIOS PARA APROBACION DE CANDIDATO POR CADA CURP */
            const aprobacionCandidatos = await axios.post(url, { data: selectedRows })

            if (aprobacionCandidatos.status === 200) {
                setSelectedRows([])
                setToggleCleared(!toggleCleared);
                setReload(true)
                AlertExito('Registros Aprobados');
            }
        } catch (error) {
            AlertError('Error', error);
        }
    }
    const desaprobarRegistros = async () => {
        /* ENVIO DE AXIOS PARA DESAPROBACION POR CADA CURP */
        const url = `${API_REQUEST}desaprobar_cand_regionales`
        try {
            /* ENVIO DE AXIOS PARA APROBACION DE CANDIDATO POR CADA CURP */
            const aprobacionCandidatos = await axios.post(url, { data: selectedRows })

            if (aprobacionCandidatos.status === 200) {
                setSelectedRows([])
                setToggleCleared(!toggleCleared);
                setReload(true)
                AlertExito('Registros desaprobados');
            }
        } catch (error) {
            AlertError('Error', error);
        }
        AlertExito('Registros Desaprobados');
    }


    const contextActions = useMemo(() => {
        const handleAprobar = () => {
            AlertaSiguiente('Se aprobarán los registros seleccionados', aprobarRegistros)
        };

        const handleDesaprobar = () => {
            AlertaSiguiente('Se desaprobarán los registros seleccionados', desaprobarRegistros)
        }
        return <>
            <button className='btn btn-success' key="aprobar" onClick={handleAprobar}>Aprobar</button>
            <button className='btn btn-danger' key="desaprobar" onClick={handleDesaprobar}>Desaprobar</button>
        </>
    }, [datosTabla, selectedRows, toggleCleared]);


    return (
        <div>
            <DataTable
                title="Candidatos"
                columns={columns}
                data={datosTabla}
                defaultSortField="Candidatos"
                expandableRows
                expandOnRowClicked
                expandableRowsComponent={<BotonesPDFs />}
                pagination
                paginationComponentOptions={paginationOptions}
                persistTableHead
                progressPending={loading}
                subHeader
                subHeaderComponent={
                    (
                        <div>
                            <input className='form-control px-5'
                                placeholder='Buscar...'
                            // onChange={findWord}
                            />
                        </div>
                    )
                }
                contextActions={contextActions}
                subHeaderAlign={'left'}
                direction={directionValue}
                selectableRows
                selectableRowsHighlight
                clearSelectedRows={toggleCleared}
                onSelectedRowsChange={manejadorCambiosColumnas}
            />
        </div>
    );
}

export default RevisionDocumentacion;