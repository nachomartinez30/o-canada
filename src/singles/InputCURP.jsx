import React, { useState } from 'react'
import curpValida from '../helpers/curpValida';
import { Alert } from 'react-bootstrap';

const InputCURP = (props) => {

    const {
        curp,
        onKeyPressCapture,
        name,
        defaultValue,
        placeholder,
        className,
        disabled,
        setCorrect,
        correct,
        onChange
    } = props


    const checkStructure = () => {
        if (typeof curp != 'undefined') {
            if (curp.length > 1) {
                const check = (curpValida(curp)) ? true : false;
                setClaseValido((check) ? '' : 'noValido')
                setCorrect(check)
                setValido(check);
            } else {
                setClaseValido('')
                setValido('');
            }
        }
    }

    const [valido, setValido] = useState('')
    const [claseValido, setClaseValido] = useState('')


    return (
        <React.Fragment>
            <input
                className={`${className} ${claseValido}`}
                value={defaultValue}
                placeholder={placeholder}
                onKeyPressCapture={onKeyPressCapture}
                onChange={onChange}
                onBlur={checkStructure}
                name={name}
                maxLength={18}
                minLength={18}
                type='text'
                disabled={disabled}
            />
            {(valido === false) &&
                <div className="col-12" style={{ backgroundColor: '#FFF3CD' }}>
                    <small className="text-danger">
                        La CURP no es valida.
                    </small>

                </div>
            }
        </React.Fragment>
    );
}

export default InputCURP;