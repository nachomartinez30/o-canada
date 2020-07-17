import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import AlertError from '../../singles/AlertError';
import sessionContext from "../../context/session/sessionContext";
// import pruebasFisicasContext from "../../context/pruebas_fisicas/pruebasFisicasContext";
import AlertExito from '../../singles/AlertExito';
import AlertCargando from '../../singles/AlertCargando';
import S9_S10 from './S9_S10'
import S9_S10View from './S9_S10View'
import { AiOutlineReload } from 'react-icons/ai';
import InfomacionCandidato from './InfomacionCandidato';


const TablaEstatales = () => {

    const sessContext = useContext(sessionContext)
    // const pruebasContext = useContext(pruebasFisicasContext)

    const API_REQUEST = 'http://187.218.230.38:81/o_canada_temp/api/'
    // const API_REQUEST = process.env.REACT_APP_BACKEN_URL

    const [reload, setReload] = useState(false)
    const [showPruebas, setShowPruebas] = useState(false)
    const [candidatoSelected, setCandidatoSelected] = useState({})
    const [modoVista, setModoVista] = useState(false)
    const [datosTabla, setDatosTabla] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    /* 
        TODO: consultar segun el estado del usuario que registra 
            -> columna formato condicional motivo de rechazo rojo
    */


    const getEstado = (cv_edo) => {
        switch (cv_edo) {
            case '01': return 'Aguascalientes';
            case '02': return 'Baja california';
            case '03': return 'Baja california sur';
            case '04': return 'Campeche';
            case '05': return 'Coahuila de zaragoza';
            case '06': return 'Colima';
            case '07': return 'Chiapas';
            case '08': return 'Chihuahua';
            case '09': return 'Ciudad de méxico';
            case '10': return 'Durango';
            case '11': return 'Guanajuato';
            case '12': return 'Guerrero';
            case '13': return 'Hidalgo';
            case '14': return 'Jalisco';
            case '15': return 'México';
            case '16': return 'Michoacán de ocampo';
            case '17': return 'Morelos';
            case '18': return 'Nayarit';
            case '19': return 'Nuevo león';
            case '20': return 'Oaxaca';
            case '21': return 'Puebla';
            case '22': return 'Querétaro';
            case '23': return 'Quintana roo';
            case '24': return 'San luis potosí';
            case '25': return 'Sinaloa';
            case '26': return 'Sonora';
            case '27': return 'Tabasco';
            case '28': return 'Tamaulipas';
            case '29': return 'Tlaxcala';
            case '30': return 'Veracruz de ignacio de la llave';
            case '31': return 'Yucatán';
            case '32': return 'Zacatecas';
            default: return 'Of.Centrales';
        }
    }

    const buscarRegistro = async () => {
        const { user } = sessContext.login
        // const searchWord = input.target.value
        const url = `${API_REQUEST}busqueda_revision_estatal`;
        AlertCargando('Buscando similitudes...')
        setLoading(true)
        if (searchWord !== '') {
            if (user) {
                try {
                    const resp = await axios.post(url, {
                        busqueda: searchWord,
                        email: user.email,
                        token: user.token,
                        user_type: user.user_type
                    });
                    if (resp.status === 200) {
                        setDatosTabla(resp.data);
                        AlertExito('Se han cargado los registros existentes')
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
        const url = `${API_REQUEST}revision_estatal`
        try {
            AlertCargando('Extrayendo registros...')
            setLoading(true)
            const resp = await axios.post(url, user)

            if (resp.status === 200) {
                AlertExito('Registros cargados')
                setDatosTabla(resp.data)
                setLoading(false)
            } else {
                AlertError('Error', resp)
            }
        } catch (error) {
            AlertError('ERROR', error)
        }
    }

    const mostrarPlantillaPruebas = (data) => {
        setCandidatoSelected(data)
        setModoVista(false)
        setShowPruebas(true)
    }

    const moodVista = (data) => {
        setCandidatoSelected(data)
        setModoVista(true)
        setShowPruebas(true)
    }

    const handleRegresar = () => {
        setShowPruebas(false)
        setReload(true)
    }

    useEffect(() => {
        getCandidatos()
        setModoVista(false)
        setReload(false)
    }, [reload === true])


    /* CONFIGURACIONES TABLA */

    const getAcciones = (row) => (row.status) ?
        <Button variant='info' onClick={() => moodVista(row)}>Ver</Button>
        :
        <Button variant='success' onClick={() => mostrarPlantillaPruebas(row)}>Agregar Pruebas</Button>


    const columns = [
        {
            name: 'Acciones',
            wrap: true,
            button: true,
            minWidth: '180px',
            cell: (row) => getAcciones(row),
        },
        {
            name: 'CURP',
            selector: 'curp',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Nombre',
            selector: 'nombres',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Estado',
            selector: 'nom_ent',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Municipio',
            selector: 'municipio',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Posición',
            selector: 'posicion_candidato',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Rechazo',
            selector: 'rechazo',
            wrap: false,
            minWidth: '200px',
            sortable: true,

        },
        // {
        //     name: 'Puntuación',
        //     selector: 'puntuacion_estimada',
        //     wrap: false,
        //     minWidth: '200px',
        //     sortable: true
        // },
        // {
        //     name: 'Result. GPS',
        //     selector: 'resultado_eval_presencial_gps',
        //     wrap: false,
        //     minWidth: '200px',
        //     sortable: true
        // },
        // {
        //     name: 'Result. MarkIII',
        //     selector: 'resultado_eval_presencial_mark_III',
        //     wrap: false,
        //     minWidth: '200px',
        //     sortable: true
        // },
    ]

    const conditionalRowStyles = [
        {
            when: row => (row.rechazo),
            style: {
                backgroundColor: '#A01F3F',
                // backgroundColor: '#D69200',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        }
    ];

    return (
        <div>
            {(showPruebas) ?
                <React.Fragment>
                    <button className='btn btn-danger'
                        onClick={() => setShowPruebas(false)}
                    >Volver</button>
                    <InfomacionCandidato
                        state={candidatoSelected}
                    />
                    {(modoVista) ?
                        <S9_S10View
                            setVolver={handleRegresar}
                            infoCandidato={candidatoSelected}
                        /> :
                        <S9_S10
                            setVolver={handleRegresar}
                            infoCandidato={candidatoSelected}
                        />
                    }
                </React.Fragment>
                :
                <>
                    <div style={{ alignContent: 'right' }}><h3>Estado: {getEstado('14')}</h3></div>
                    <InputGroup className="mb-2 pt-4">
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Control
                                    onChange={(input) => setSearchWord(input.target.value)}
                                    className="mb-2 px-5"
                                    value={searchWord}
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
                            <Col xs="auto">
                                <Button className='mb-2' variant='info' onClick={() => {
                                    setSearchWord('')
                                    setReload(true)
                                }}>
                                    <AiOutlineReload />
                                </Button>
                            </Col>
                        </Form.Row>
                    </InputGroup>
                    {/* <button className='btn btn-outline-info' onClick={() => {
                        setSearchWord('')
                        setReload(true)
                    }}>
                        Recargar
                    </button> */}
                    <DataTable
                        title="Candidatos para pruebas físicas"
                        columns={columns}
                        data={datosTabla}
                        defaultSortField="curp"
                        paginationComponentOptions={
                            {
                                rowsPerPageText: 'Filas por página',
                                rangeSeparatorText: 'de',
                                selectAllRowsItem: true,
                                selectAllRowsItemText: 'Todos'
                            }
                        }
                        persistTableHead
                        progressPending={loading}
                        // subHeader
                        // subHeaderComponent={
                        //     (
                        //         <Form.Row className="align-items-center">
                        //             <Col xs="auto">
                        //                 <Form.Control
                        //                     onChange={(input) => setSearchWord(input.target.value)}
                        //                     className="mb-2"
                        //                     value={searchWord}
                        //                     id="inlineFormInput"
                        //                     placeholder="Buscar..."
                        //                 />
                        //             </Col>
                        //             <Col xs="auto">
                        //                 <Button className="mb-2"
                        //                     onClick={buscarRegistro}
                        //                 >
                        //                     Buscar
                        //                     </Button>
                        //             </Col>
                        //         </Form.Row>
                        //     )
                        // }
                        // contextActions={contextActions}
                        contextMessage={{ singular: 'registro', plural: 'registros', message: 'seleccionados' }}
                        subHeaderAlign={'left'}
                        // direction={directionValue}
                        // selectableRows
                        // selectableRowsHighlight
                        // clearSelectedRows={toggleCleared}
                        // onSelectedRowsChange={manejadorCambiosColumnas}
                        conditionalRowStyles={conditionalRowStyles}
                        pagination
                    />
                </>
            }
        </div>
    );
}

export default TablaEstatales;