import React from 'react'

const SideBar = (props) => {
    const { title = 'Cotejo de documentos', showSection, setShowSection, porfileSections } = props

    const handleClick = (e) => {
        e.preventDefault();
        const clicked = e.target.value;

        switch (clicked) {
            case 'regionales':
                setShowSection({
                    regionales: true,
                    estatales: false,
                    mesa_ayuda: false,
                    manifiesto: false,
                })
                break;
            case 'estatales':
                setShowSection({
                    regionales: false,
                    estatales: true,
                    mesa_ayuda: false,
                    manifiesto: false,
                })
                break;
            case 'mesa_ayuda':
                setShowSection({
                    regionales: false,
                    estatales: false,
                    mesa_ayuda: true,
                    manifiesto: false,
                })
                break;
            case 'manifiesto':
                setShowSection({
                    regionales: false,
                    estatales: false,
                    mesa_ayuda: false,
                    manifiesto: true,
                })
                break;
            default: return;
        }
    }
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">{title}</div>
            <div className="list-group list-group-flush">
                {porfileSections.regionales && <button value='regionales' className="list-group-item list-group-item-action bg-light"
                    onClick={handleClick}
                >
                    Regionales
                </button>}
                {porfileSections.estatales && <button value='estatales' className="list-group-item list-group-item-action bg-light"
                    onClick={handleClick}
                >
                    Estatales
                </button>}
                {porfileSections.mesa_ayuda && <button value='mesa_ayuda' className="list-group-item list-group-item-action bg-light"
                    onClick={handleClick}
                >
                    Mesa
                 de ayuda</button>}
                {porfileSections.manifiesto && <button value='manifiesto' className="list-group-item list-group-item-action bg-light"
                    onClick={handleClick}
                >
                    Manifiesto
                </button>}
            </div>
        </div>
    );
}

export default SideBar;