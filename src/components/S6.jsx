import React from 'react'

const S6 = (props) => {
    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }
    return (
        <h1>S2</h1>
    );
}

export default S6;