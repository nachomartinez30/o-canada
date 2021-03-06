import React from 'react'


const SelectSiNo = (props) => {
    const { name, onChange, defaultValue, className, onBlur, onChangeCapture, disabled } = props

    return (
        <select
            className={className}
            onChange={onChange}
            onChangeCapture={onChangeCapture}
            onBlur={onBlur}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
        >
            <option value=''>---Seleccione---</option>
            <option value={1}>SI</option>
            <option value={0}>NO</option>
        </select>
    );
}

export default SelectSiNo;