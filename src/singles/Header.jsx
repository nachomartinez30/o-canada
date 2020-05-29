import React from 'react'
import logo_incedios from '../assets/logo_incendios.svg'
import logo_conafor from '../assets/logo_cnf.svg'
import logo_semarnat from '../assets/logo_semarnat.svg'
import serpiente_amarilla from '../assets/serpiente_amarilla.svg'

const Header = () => {
    return (
        <nav className="navbar px-5 row">
            <div className="col-3 col-md-3 order-3 order-md-1">
                <img
                    src={logo_incedios}
                    // width={80}
                    //height={100}
                    className="d-inline-block align-top top-logo wi-100"
                    alt='logo_incedios'
                />
            </div>
            <div className="col-6 col-md-3 order-1 order-md-2">
                <img
                    src={logo_semarnat}
                    // width={80}
                    //height={70}
                    className="d-inline-block align-top top-logo wi-100"
                    alt='logo_semarnat'
                />
            </div>
            <div className="col-6 col-md-3 order-2 order-md-3">
                <img
                    src={logo_conafor}
                    // width={80}
                    //height={100}
                    className="d-inline-bl<ock align-top top-logo wi-100"
                    alt='logo_conafor'
                />
            </div>
            <div className="col-3 col-md-3 order-4 order-md-4">
                <img
                    src={serpiente_amarilla}
                    // width={80}
                    //height={100}
                    className="d-inline-block align-top top-logo wi-100"
                    alt='serpiente_amarilla'
                />
            </div>
        </nav>
    );
}

export default Header;