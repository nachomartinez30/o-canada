import React from 'react'

const SideBar = (props) => {
    const { title = 'Cotejo de documentos' } = props
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">{title}</div>
            <div className="list-group list-group-flush">
                <button className="list-group-item list-group-item-action bg-light">Candidatos</button>
                {/* <button className="list-group-item list-group-item-action bg-light">Shortcuts</button> */}
                {/* <button className="list-group-item list-group-item-action bg-light">Overview</button> */}
                {/* <button className="list-group-item list-group-item-action bg-light">Events</button> */}
                {/* <button className="list-group-item list-group-item-action bg-light">Profile</button> */}
                {/* <button className="list-group-item list-group-item-action bg-light">Status</button> */}
            </div>
        </div>
    );
}

export default SideBar;