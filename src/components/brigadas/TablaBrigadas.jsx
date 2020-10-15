import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import AlertError from '../../singles/AlertError'
import AlertExito from '../../singles/AlertExito'
import AlertCargando from '../../singles/AlertCargando'
import EvaluacionDesepenio from './EvaluacionDesepenio';
import axios from '../../config/axios'
import sessionContext from "../../context/session/sessionContext";

const TablaBrigadas = () => {
    const sessContext = useContext(sessionContext)
    const [showEvaluacion, setShowEvaluacion] = useState(false)
    const [reload, setReload] = useState(false)
    const [brigadistaSelected, setBrigadistaSelected] = useState({})
    const [brigadistas, setBrigadistas] = useState([])

    const mostrarEvaluacionBrigadista = row => {
        setBrigadistaSelected(row)
        setShowEvaluacion(true)
    }

    const getBrigadistas = async () => {
        const { user } = sessContext.login
        try {
            AlertCargando('Buscando brigadistas....');
            const resp = await axios.post('/brigadistas_evaluacion', user)
            if (resp.status === 200) {
                setBrigadistas(resp.data)
                AlertExito('¡Cargado con exito!')
            }
        } catch (error) {
            AlertError(error)
        }
    }


    useEffect(() => {
        /* carga por jefe de brigada, los brigadistas que le corresponden */
        getBrigadistas();

    }, [reload])

    /* CONFIGURACIONES TABLA */
    // PARA ESTE CASO SE MODIFICÓ EL PUESTO EN LA VISTA DEL BACKEND
    const columns = [
        {
            name: 'Acciones',
            wrap: true,
            button: true,
            minWidth: '180px',
            /* enviar a evaluacion del brigadista */
            cell: (row) => (row.status === 'evaluado') ?
                <Button className='btn btn-block btn-success' onClick={() => mostrarEvaluacionBrigadista(row)}>Evaluar</Button>
                :
                <Button className='btn btn-block btn-info' onClick={() => mostrarEvaluacionBrigadista(row)}>Ver evaluación</Button>
            ,
        },
        {
            name: 'CURP',
            selector: 'curp_brigadista',
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
            name: 'Puesto',
            selector: 'posicion_candidato',
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
            name: 'Estatus',
            selector: 'status_evaluacion',
            wrap: false,
            minWidth: '200px',
            sortable: true
        }

    ]

    return (
        <Fragment>
            {
                showEvaluacion ?
                    <Fragment>
                        <EvaluacionDesepenio data={brigadistaSelected} backTable={() => setShowEvaluacion(false)} />
                    </Fragment>
                    :
                    <Fragment>
                        {/* Mostrar en una tabla, los brigadistas petenecientes a la cuenta entrante */}
                        <div style={{ alignContent: 'right' }}><h3>Brigada: {''}</h3></div>

                        <button className='btn btn-outline-info' onClick={() => {
                            // setSearchWord('')
                            setReload(true)
                        }}>
                            Recargar
                    </button>
                        <DataTable
                            title="Candidatos para pruebas físicas"
                            columns={columns}
                            data={brigadistas}
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
                            progressPending={false}
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
                    </Fragment>
            }
        </Fragment>
    );
}

export default TablaBrigadas;