import React, { useState, useEffect, useMemo, useContext } from 'react'
import lodash from 'lodash'
import { Nav } from 'react-bootstrap'
import axios from 'axios'
import AlertError from '../../singles/AlertError'
import DataTable from 'react-data-table-component'
import AlertaSiguiente from "../../singles/AlertaSiguiente";
import AlertExito from "../../singles/AlertExito";
import sessionContext from "../../context/session/sessionContext";


const API_REQUEST = process.env.REACT_APP_BACKEN_URL
const URL_documentos = process.env.REACT_APP_BACKEND_DOCS
// const URL_documentos = '187.218.230.38:81'

const RevisionDocumentacion = () => {
    const sessContext = useContext(sessionContext)
    /* TODO: Acreditar revision de candidatos, terminar Searchbar */

    const [candidatos, setCandidatos] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    // const [showPDF, setShowPDF] = useState(false)
    const [reload, setReload] = useState(true)
    const [selectedRows, setSelectedRows] = useState([]);


    const [toggleCleared, setToggleCleared] = useState(false);

    /* Edicion de la tabla */
    const getCandidatos = async () => {
        const { user } = sessContext.login
        const url = `${API_REQUEST}revision_region`;
        try {
            const respuesta = await axios.post(url, user)
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
        const URL_documentos = process.env.REACT_APP_BACKEND_DOCS
        const url = `${URL_documentos}/${data.curp}/${documento}.pdf`;
        window.open(url, '_blank');
    }

    const [loading, setLoading] = useState(false);
    const [directionValue, setDirectionValue] = useState('auto');

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

    const BotonesPDFs = ({ data }) => {
        debugger
        return (
            <div className='py-5'>
                <Nav justify variant="pills" defaultActiveKey="">
                    {data.files.map((item) => <Nav.Item>
                        <a className='btn btn-primary'
                            href={`${URL_documentos}/${data.curp}/${item}`}
                            target='_blank'
                            rel="noopener noreferrer">
                            {item}
                        </a>
                    </Nav.Item>)}
                </Nav>

            </div>
        )
    };

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
            selector: 'aprobado_regionales',
            conditionalCellStyles: [
                {
                    when: row => row.aprobado_regionales === 'aprobado',
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
                    when: row => row.aprobado_regionales === 'desaprobado',
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
                contextMessage={{ singular: 'registro', plural: 'registros', message: 'seleccionados' }}
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