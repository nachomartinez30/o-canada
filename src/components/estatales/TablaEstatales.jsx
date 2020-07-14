import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import AlertError from '../../singles/AlertError';
import sessionContext from "../../context/session/sessionContext";
import AlertExito from '../../singles/AlertExito';
import AlertCargando from '../../singles/AlertCargando';
import S9_S10 from './S9_S10'
import InfomacionCandidato from './InfomacionCandidato';


const TablaEstatales = () => {

    const sessContext = useContext(sessionContext)
    const API_REQUEST = process.env.REACT_APP_BACKEN_URL

    const [reload, setReload] = useState(false)
    const [showPruebas, setShowPruebas] = useState(false)
    const [candidatoSelected, setCandidatoSelected] = useState({})
    const [datosTabla, setDatosTabla] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    /* 
        TODO: consultar segun el estado del usuario que registra 
    */

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
        setShowPruebas(true)
    }


    useEffect(() => {
        getCandidatos()

    }, [reload])


    /* CONFIGURACIONES TABLA */
    const columns = [
        {

            name: 'Acciones',
            wrap: true,
            button: true,
            minWidth: '180px',
            cell: (row) => <Button variant='info' onClick={() => mostrarPlantillaPruebas(row)}>Agregar Pruebas</Button>,
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
            name: 'Result. Prueba',
            selector: 'prueba',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Puntuación',
            selector: 'puntuacion_estimada',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Result. GPS',
            selector: 'resultado_eval_presencial_gps',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'Result. MarkIII',
            selector: 'resultado_eval_presencial_mark_III',
            wrap: false,
            minWidth: '200px',
            sortable: true
        },

    ]


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
                    <S9_S10  />
                </React.Fragment>
                :
                <>
                    <div style={{ alignContent: 'right' }}><h3>Estado: {''}</h3></div>

                    <button className='btn btn-outline-info' onClick={() => {
                        setSearchWord('')
                        setReload(true)
                    }}>
                        Recargar
                    </button>
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
                        // conditionalRowStyles={conditionalRowStyles}
                        pagination
                    />
                </>
            }
        </div>
    );
}

export default TablaEstatales;