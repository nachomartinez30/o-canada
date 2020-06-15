import React, { useContext, useEffect, useState } from 'react'
import sessionContext from "../context/session/sessionContext";
import SideBar from './SideBar';
import RevisionDocumentacion from './RevisionDocumentacion';


const API_REQUEST = process.env.REACT_APP_BACKEN_URL


const Dashboard = () => {
    const sessContext = useContext(sessionContext)
    const [toggled, setToggled] = useState(true)
    const handleToggle = () => {
        setToggled(!toggled)
    }

    return (

        <div class={`d-flex ${(toggled) ? null : 'toggled'}`} id="wrapper">
            {/* SIDEBAR */}
            <SideBar title={'Regionales'} />
            {/* CONTENIDO DASHBOARD*/}
            <div id="page-content-wrapper">
                <label className="switch">
                    <input type="checkbox" checked={toggled} onChange={handleToggle} />
                    <div className="slider"></div>
                </label>
                <div className="container-fluid">
                    <RevisionDocumentacion />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;