import React from 'react'
import logo_incedios from '../assets/logo_incendios.jpg'
import logo_conafor from '../assets/logo_cnf.png'
import logo_semarnat from '../assets/logo_semarnat.png'

const Header = () => {
    return (
        <nav className="navbar px-5">
            <img
                src={logo_incedios}
                width={80}
                height={80}
                className="d-inline-block align-top"
                alt='logo_incedios'
            />
            <img
                src={logo_semarnat}
                // width={80}
                height={50}
                className="d-inline-block align-top"
                alt='logo_semarnat'
            />
            <img
                src={logo_conafor}
                // width={80}
                height={50}
                className="d-inline-block align-top"
                alt='logo_conafor'
            />
            <h3>O'Canada</h3>
        </nav>
    );
}

export default Header;