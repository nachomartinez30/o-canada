import React from 'react'
import { Form } from 'react-bootstrap';

const FrmFiles = (props) => {

    const { data, setData } = props

    return (
        <div className='row'>
            <h1>Archivos</h1>
            <Form.Label>Archivo</Form.Label>
            <Form.Control
                type='file'
            />
        </div>
    );
}

export default FrmFiles;