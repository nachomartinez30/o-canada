import React from 'react'


const SelectSiNo = (props) => {
    const { name, onChange, defaultValue, className, onBlur} = props

    return (
        <select
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={defaultValue}
        >
            <option value=''>---Seleccione---</option>
            <option value={1}>SI</option>
            <option value={0}>NO</option>
        </select>
    );
}

export default SelectSiNo;