import React from 'react'

const InputNumber = (props) => {
    const { className, name, value, onChange, placeholder, limitLength, onBlur, onChangeCapture, disabled } = props
    return (
        <input
            disabled={disabled}
            className={className}
            name={name}
            value={value}
            onInput={(e) => e.target.value = e.target.value.slice(0, limitLength)}
            type='number'
            onChange={onChange}
            onChangeCapture={onChangeCapture}
            onBlur={onBlur}
            placeholder={placeholder}
        />
    );
}

export default InputNumber;