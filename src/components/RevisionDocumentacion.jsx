import React, { useState, useEffect } from 'react'
import lodash from 'lodash'
import { ButtonGroup, Button, Nav } from 'react-bootstrap'
import axios from 'axios'
import AlertError from '../singles/AlertError'
import DataTable from 'react-data-table-component'
import PDFViewer from 'pdf-viewer-reactjs'
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

    const [toggleCleared, setToggleCleared] = React.useState(false);

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

    const mostrarDocumento = (documento) => {
        setLinkDocumento(documento)
        setShowPDF(true)
    }

    const [loading, setLoading] = React.useState(false);
    const [directionValue, setDirectionValue] = React.useState('auto');

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

    const BotonesPDFs = ({ data }) => (
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
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]

    const manejadorCambiosColumnas = state => {
        setSelectedRows(state.selectedRows);
    };

    const eliminarRegistros = () => {
        AlertExito('Registros eliminados');
    }


    const contextActions = React.useMemo(() => {
        const handleDelete = () => {
            AlertaSiguiente('se eliminaran los registros seleccionados', eliminarRegistros)
        };
        return <>
            <button className='btn btn-success' key="acreditar" onClick={handleDelete}>Acreditar</button>
            <button className='btn btn-danger' key="desacreditar" onClick={handleDelete}>Desacreditar</button>
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
                onSelectedRowsChange={manejadorCambiosColumnas}
            />
        </div>
    );
}

export default RevisionDocumentacion;