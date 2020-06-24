import React, { useContext, useState } from 'react'
import sessionContext from "../context/session/sessionContext";
import SideBar from './SideBar';
import RevisionDocumentacion from './RevisionDocumentacion';
import axios from 'axios';
import AlertError from '../singles/AlertError';





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