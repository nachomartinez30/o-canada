import React, { useState, useEffect, useMemo, useContext } from 'react'

import { Nav, Modal, Button, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import AlertError from '../../singles/AlertError'
import DataTable from 'react-data-table-component'
import AlertaSiguiente from "../../singles/AlertaSiguiente";
import AlertExito from "../../singles/AlertExito";
import sessionContext from "../../context/session/sessionContext";



// const API_REQUEST = process.env.REACT_APP_BACKEN_URL
const API_REQUEST = 'http://187.218.230.38:81/o_canada_temp/api/'
// const URL_documentos = process.env.REACT_APP_BACKEND_DOCS
// const URL_documentos = '187.218.230.38:81'

const RevisionDocumentacion = () => {
    const sessContext = useContext(sessionContext)
    /* TODO: 
        terminar actualizacion de observacion 
        terminar Searchbar 
    */

    const [candidatos, setCandidatos] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    const [searchWord, setSearchWord] = useState('')
    // const [paginasPor, setPaginasPor] = useState(10)
    const [reload, setReload] = useState(true)
    const [selectedRows, setSelectedRows] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [infoObservacionModal, setInfoObservacionModal] = useState({})
    const [toggleCleared, setToggleCleared] = useState(false);
    const [loading, setLoading] = useState(false);
    const [directionValue, setDirectionValue] = useState('auto');
    const [nombreRegion, setNombreRegion] = useState('')

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

    const getRegionName = () => {
        const { user } = sessContext.login
        switch (user.region) {
            case '1':
                setNombreRegion('Noroeste');
                break;
            case '2':
                setNombreRegion('Norte');
                break;
            case '3':
                setNombreRegion('Noreste');
                break;
            case '4':
                setNombreRegion('Occidente');
                break;
            case '5':
                setNombreRegion('Centro');
                break;
            case '6':
                setNombreRegion('Sureste');
                break;
            case '99':
                setNombreRegion(' OF.Centrales');
                break;
            default: setNombreRegion('null');
                break
        }
    }

    /* Edicion de la tabla */
    const buscarRegistro = async () => {
        const { user } = sessContext.login
        // const searchWord = input.target.value
        const url = `${API_REQUEST}busqueda_revision_region`;
        setLoading(true)
        if (searchWord !== '') {
            if (user) {
                try {
                    const resp = await axios.post(url, {
                        busqueda: searchWord,
                        email: user.email,
                        token: user.token,
                        region: user.region
                    });
                    if (resp.status === 200) {
                        setCandidatos(resp.data);
                        setDatosTabla(resp.data)
                        setLoading(false)
                    } else {
                        AlertError('Error', resp.data);
                    }
                } catch (error) {
                    AlertError('Error', error)
                }
            }
        } else {
            getCandidatos();
        }
    }
    const getCandidatos = async () => {
        const { user } = sessContext.login
        const url = `${API_REQUEST}revision_region`;
        setLoading(true)
        try {
            const respuesta = await axios.post(url, user)
            if (respuesta.status === 200) {
                setCandidatos(respuesta.data);
                setDatosTabla(respuesta.data)
                setLoading(false)
            } else {
                AlertError('Error', respuesta.data);
            }
        } catch (error) {
            AlertError('Error:', error)
        }
    }

    useEffect(() => {
        getCandidatos();
        getRegionName()
        setReload(false)
    }, [reload])

    const mostrarDocumento = (documento, data) => {
        const URL_documentos = process.env.REACT_APP_BACKEND_DOCS
        const url = `${URL_documentos}/${data.curp}/${documento}`;
        window.open(url, '_blank');
    }

    const getNombreArchivo = (item) => {
        const indiceExtension = item.indexOf('.');
        const archivo = item.substring(0, indiceExtension)

        switch (archivo) {
            case 'carta_antecedentes':
                return 'Carta de antecentes penales';

            case 'cert_intern_ate_emerg_med_file':
                return 'Cert. Inter Emergencias'

            case 'cert_medico':
                return 'Cert. Médico'

            case 'cert_toxicologico':
                return 'Cert. Toxicologico'

            case 'curp_archivo':
                return 'CURP'

            case 'doc_acred_primeros_auxilios':
                return 'Acred. P. Auxilios'

            case 'ETA':
                return 'VISA/eTA'

            case 'fotografia':
                return 'Fotografía'

            case 'licencia_manejo':
                return 'Licencia de manejo'

            case 'l_280_file':
                return 'Cert. L-280'

            case 'pasaporte_archivo':
                return 'Pasaporte'

            case 'sci_smi_100':
                return 'SCI 100'

            case 'sci_smi_200':
                return 'SCI 200'

            case 'toefl':
                return 'TOEFL/TOEIC'
            case 's_130':
                return 'Cert. S-130'
            case 's_190':
                return 'Cert. S-190'
            case 'cert_intern_incendios_file':
                return 'Cert. Intern. Incendios'

            default:
                return 'check= ' + item

        }
    }

    const BotonesPDFs = ({ data }) => {
        return (
            <div className='py-5'>
                <Nav justify variant="pills" defaultActiveKey="">
                    {(data.files) ? data.files.map((item) => <Nav.Item>
                        <Nav.Link
                            eventKey={item}
                            onClick={() => mostrarDocumento(item, data)}
                        >
                            {getNombreArchivo(item)}
                        </Nav.Link>
                    </Nav.Item>)
                        : null
                    }
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
            minWidth: '200px',
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
            maxWidth: '5px',
            wrap: true,
            sortable: true
        },
        {
            name: 'Años de experiencia',
            selector: 'anios_experiencia',
            wrap: true,
            maxWidth: '5px',
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
        }, {

            name: 'Agregar Observacion',
            wrap: true,
            button: true,
            minWidth: '180px',
            cell: (row) => <Button onClick={() => agregarObservacion(row)}>Observacion</Button>,
        }
    ]

    const sendObservacion = async () => {
        const url = `${API_REQUEST}/candidato_update`

        const secciones = {
            login: { status: 'completa', visible: false },
            s1: { status: 'completa', visible: false },
            s2: { status: 'completa', visible: false },
            s3: { status: 'completa', visible: false },
            s4: { status: 'completa', visible: false },
            s5: { status: 'completa', visible: false },
            s6: { status: 'completa', visible: false },
            s7: { status: 'completa', visible: false },
            s8: { status: 'completa', visible: false },
        }
        /* TOMAR STATE */
        try {
            const resp = await axios.post(url, { data: infoObservacionModal, secuencia: secciones })
            if (resp.status === 200) {
                AlertExito('Éxito', 'El registro fue actualizado')
                setReload(true);
            }
        } catch (error) {

        }
        /* ENVIARLO VIA AXIOS */
        /* HACER RELOAD */
    }

    const agregarObservacion = (row) => {
        setInfoObservacionModal(row)
        handleShowModal(true)
    }

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

    const conditionalRowStyles = [
        {
            when: row => row.observacion_regional,
            style: {
                backgroundColor: '#b78d86',
                // backgroundColor: '#D69200',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        }
    ];

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

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    /* SERVER-SIDE RENDER */
    // const handlePerRowsChange = async (newPerPage, page) => {
    //     setLoading(true);
    //     debugger
    //     // const response = await axios.get(
    //     //     `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`,
    //     // );

    //     // setDatosTabla(response.data.data);
    //     // setPaginasPor(newPerPage);
    //     // setLoading(false);
    // };


    // const handlePageChange = page => {
    //     // getCandidatos(page);
    //     console.log(page);

    // };

    return (
        <div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar observacion a la curp <b>{infoObservacionModal.curp}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        name='observacion_regional'
                        onChange={(input) => {
                            setInfoObservacionModal({
                                curp: infoObservacionModal.curp,
                                observacion_regional: input.target.value
                            })
                        }}
                        value={infoObservacionModal.observacion_regional}
                        as="textarea"
                        rows="3"

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={sendObservacion}>
                        Agregar
                    </Button>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ alignContent: 'right' }}><h3>Region: {nombreRegion}</h3></div>
            {/* TABLA */}
            <button className='btn btn-outline-info' onClick={() => {
                setSearchWord('')
                setReload(true)
            }}>
                Recargar
            </button>
            <DataTable
                title="Candidatos"
                columns={columns}
                data={datosTabla}
                defaultSortField="curp"
                expandableRows
                expandOnRowClicked
                expandableRowsComponent={<BotonesPDFs />}
                paginationComponentOptions={paginationOptions}
                persistTableHead
                progressPending={loading}
                subHeader
                subHeaderComponent={
                    (
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Control
                                    onChange={(input) => setSearchWord(input.target.value)}
                                    className="mb-2"
                                    value={searchWord}
                                    id="inlineFormInput"
                                    placeholder="Buscar..."
                                />
                            </Col>
                            <Col xs="auto">
                                <Button className="mb-2"
                                    onClick={buscarRegistro}
                                >
                                    Buscar
                                    </Button>
                            </Col>
                        </Form.Row>
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
                conditionalRowStyles={conditionalRowStyles}
                pagination
            // paginationServer
            // onChangeRowsPerPage={handlePerRowsChange}
            // onChangePage={handlePageChange}
            />
        </div>
    );
}

export default RevisionDocumentacion;