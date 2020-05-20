import React from 'react'
import { Form } from 'react-bootstrap';

const SelectSiNo = (props) => {
    const { name, onChange, defaultValue = '', className } = props

    return (
        <select
            className={className}
            onChange={onChange}
            name={name}
            value={defaultValue}
        >
            <option value=''>---Seleccione---</option>
            <option value='si'>SI</option>
            <option value='no'>NO</option>
        </select>
    );
}

export default SelectSiNo;