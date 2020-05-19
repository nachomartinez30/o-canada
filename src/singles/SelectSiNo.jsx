import React from 'react'
import { Form } from 'react-bootstrap';

const SelectSiNo = (props) => {
    const { name, onChange, defaultValue = '' } = props

    return (
        <Form.Control as='select'
            onChange={onChange}
            name={name}
            value={defaultValue}
        >
            <option value=''>---Seleccione---</option>
            <option value='si'>SI</option>
            <option value='no'>NO</option>
        </Form.Control>
    );
}

export default SelectSiNo;