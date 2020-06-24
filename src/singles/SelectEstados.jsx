import React from 'react'

const SelectEstados = (props) => {

    const { name, className, onChange, onBlur } = props
    const data = [
        {
            "id": 1,
            "cve_ent": "01",
            "nom_ent": "AGUASCALIENTES",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Ags. "
        },
        {
            "id": 2,
            "cve_ent": "02",
            "nom_ent": "BAJA CALIFORNIA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "B.C. "
        },
        {
            "id": 3,
            "cve_ent": "03",
            "nom_ent": "BAJA CALIFORNIA SUR",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "B.C.S. "
        },
        {
            "id": 4,
            "cve_ent": "04",
            "nom_ent": "CAMPECHE",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Camp. "
        },
        {
            "id": 5,
            "cve_ent": "05",
            "nom_ent": "COAHUILA DE ZARAGOZA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Coah. "
        },
        {
            "id": 6,
            "cve_ent": "06",
            "nom_ent": "COLIMA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Col. "
        },
        {
            "id": 7,
            "cve_ent": "07",
            "nom_ent": "CHIAPAS",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Chis. "
        },
        {
            "id": 8,
            "cve_ent": "08",
            "nom_ent": "CHIHUAHUA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Chih. "
        },
        {
            "id": 9,
            "cve_ent": "09",
            "nom_ent": "CIUDAD DE MÉXICO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "C.D.Mx. "
        },
        {
            "id": 10,
            "cve_ent": "10",
            "nom_ent": "DURANGO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Dgo. "
        },
        {
            "id": 11,
            "cve_ent": "11",
            "nom_ent": "GUANAJUATO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Gto. "
        },
        {
            "id": 12,
            "cve_ent": "12",
            "nom_ent": "GUERRERO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Gro. "
        },
        {
            "id": 13,
            "cve_ent": "13",
            "nom_ent": "HIDALGO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Hgo. "
        },
        {
            "id": 14,
            "cve_ent": "14",
            "nom_ent": "JALISCO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Jal. "
        },
        {
            "id": 15,
            "cve_ent": "15",
            "nom_ent": "MÉXICO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Edo. Méx."
        },
        {
            "id": 16,
            "cve_ent": "16",
            "nom_ent": "MICHOACÁN DE OCAMPO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Mich. "
        },
        {
            "id": 17,
            "cve_ent": "17",
            "nom_ent": "MORELOS",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Mor. "
        },
        {
            "id": 18,
            "cve_ent": "18",
            "nom_ent": "NAYARIT",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Nay. "
        },
        {
            "id": 19,
            "cve_ent": "19",
            "nom_ent": "NUEVO LEÓN",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "N.L. "
        },
        {
            "id": 20,
            "cve_ent": "20",
            "nom_ent": "OAXACA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Oax. "
        },
        {
            "id": 21,
            "cve_ent": "21",
            "nom_ent": "PUEBLA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Pue. "
        },
        {
            "id": 22,
            "cve_ent": "22",
            "nom_ent": "QUERÉTARO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Qro. "
        },
        {
            "id": 23,
            "cve_ent": "23",
            "nom_ent": "QUINTANA ROO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Q. Roo."
        },
        {
            "id": 24,
            "cve_ent": "24",
            "nom_ent": "SAN LUIS POTOSÍ",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "S.L.P. "
        },
        {
            "id": 25,
            "cve_ent": "25",
            "nom_ent": "SINALOA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Sin. "
        },
        {
            "id": 26,
            "cve_ent": "26",
            "nom_ent": "SONORA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Son. "
        },
        {
            "id": 27,
            "cve_ent": "27",
            "nom_ent": "TABASCO",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tab. "
        },
        {
            "id": 28,
            "cve_ent": "28",
            "nom_ent": "TAMAULIPAS",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tamps. "
        },
        {
            "id": 29,
            "cve_ent": "29",
            "nom_ent": "TLAXCALA",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tlax. "
        },
        {
            "id": 30,
            "cve_ent": "30",
            "nom_ent": "VERACRUZ DE IGNACIO DE LA LLAVE",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Ver. "
        },
        {
            "id": 31,
            "cve_ent": "31",
            "nom_ent": "YUCATÁN",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Yuc. "
        },
        {
            "id": 32,
            "cve_ent": "32",
            "nom_ent": "ZACATECAS",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Zac. "
        }
    ]

    return (
        <select
            className={className}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
        >
            <option value=''>--Seleccione--</option>
            {typeof data != 'undefined' && data.map((item) => <option key={item.cve_ent} value={item.cve_ent}>{item.nom_ent}</option>)}
        </select>
    );
}

export default SelectEstados;