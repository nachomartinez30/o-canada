import React from 'react'
import { Form } from 'react-bootstrap';

const SelectSiNo = (props) => {
    const { name, textLabel, onChange, defaultValue } = props

    return (
        <Form.Control as='select'
            onChange={onChange}
            name={name}
            value={defaultValue}
        >
            <option>---Seleccione---</option>
            <option>SI</option>
            <option>NO</option>
        </Form.Control>
    );
}

export default SelectSiNo;