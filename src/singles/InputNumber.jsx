import React from 'react'

const InputNumber = (props) => {
    const { className, name, value, onChange, placeholder, limitLength } = props
    return (
        <input
            className={className}
            name={name}
            value={value}
            onInput={(e) => e.target.value = e.target.value.slice(0, limitLength)}
            type='number'
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default InputNumber;