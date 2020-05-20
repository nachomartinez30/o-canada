import React, { useState, useEffect } from 'react'
import S1 from '../components/S1';
import S2 from '../components/S2';
import S3 from '../components/S3';
import S4 from '../components/S4';
import S5 from '../components/S5';
import S6 from '../components/S6';
import S7 from '../components/S7';
import S8 from '../components/S8';



const Captura = () => {

    const [infoBrigadista, setInfoBrigadista] = useState({
        imc: 0
    })
    const [secciones, setSecciones] = useState({
        s1: { status: 'faltante', visible: true },
        s2: { status: 'faltante', visible: false },
        s3: { status: 'faltante', visible: false },
        s4: { status: 'faltante', visible: false },
        s5: { status: 'faltante', visible: false },
        s6: { status: 'faltante', visible: false },
        s7: { status: 'faltante', visible: false },
        s8: { status: 'faltante', visible: false },
    })

    const checkDataS1 = () => {

    }
    const checkDataS2 = () => {

    }
    const checkDataS3 = () => {

    }
    const checkDataS4 = () => {

    }
    const checkDataS5 = () => {

    }
    const checkDataS6 = () => {

    }
    const checkDataS7 = () => {

    }
    const checkDataS8 = () => {

    }

    return (
        <div className='container'>
            <h1 >Formulario captura</h1>
            {secciones.s1.visible &&
                <S1
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS1}
                />
            }
            {secciones.s2.visible &&
                <S2
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS2}
                />
            }
            {secciones.s3.visible &&
                <S3
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS3}
                />
            }
            {secciones.s4.visible &&
                <S4
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS4}
                />
            }
            {secciones.s5.visible &&
                <S5
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS5}
                />
            }
            {secciones.s6.visible &&
                <S6
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS6}
                />
            }
            {secciones.s7.visible &&
                <S7
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS7}
                />
            }
            {secciones.s8.visible &&
                <S8
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS8}
                />
            }
        </div>
    );
}

export default Captura;