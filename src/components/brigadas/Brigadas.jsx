import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import EvaluacionDesepenio from './EvaluacionDesepenio';
// import { Link } from 'react-router-dom';

const Brigadas = () => {
    const [showEvaluacion, setShowEvaluacion] = useState(false)
    const [brigadistaSelected, setBrigadistaSelected] = useState({})

    const mostrarEvaluacionBrigadista = row => {
        setBrigadistaSelected(row)
        setShowEvaluacion(true)
    }

    /* CONFIGURACIONES TABLA */
    const columns = [
        {
            name: 'Acciones',
            wrap: true,
            button: true,
            minWidth: '180px',
            /* enviar a evaluacion del brigadista */
            cell: (row) => <Button className='btn btn-block btn-success' onClick={() => mostrarEvaluacionBrigadista(row)}>Evaluar</Button>,
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
                            // setReload(true)
                        }}>
                            Recargar
                    </button>
                        <DataTable
                            title="Candidatos para pruebas físicas"
                            columns={columns}
                            data={[
                                { curp: 'MADO', nombres: 'Nacho', nom_ent: 'Jalisco' }
                            ]}
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

export default Brigadas;