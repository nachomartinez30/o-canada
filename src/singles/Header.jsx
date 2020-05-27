import React from 'react'
import logo_incedios from '../assets/logo_incendios.svg'
import logo_conafor from '../assets/logo_cnf.svg'
import logo_semarnat from '../assets/logo_semarnat.svg'
import serpiente_amarilla from '../assets/serpiente_amarilla.svg'

const Header = () => {
    return (
        <nav className="navbar px-5">
            <img
                src={logo_incedios}
                // width={80}
                height={100}
                className="d-inline-block align-top"
                alt='logo_incedios'
            />
            <img
                src={logo_semarnat}
                // width={80}
                height={70}
                className="d-inline-block align-top"
                alt='logo_semarnat'
            />
            <img
                src={logo_conafor}
                // width={80}
                height={100}
                className="d-inline-bl<ock align-top"
                alt='logo_conafor'
            />
            <img
                src={serpiente_amarilla}
                // width={80}
                height={100}
                className="d-inline-block align-top"
                alt='serpiente_amarilla'
            />
        </nav>
    );
}

export default Header;