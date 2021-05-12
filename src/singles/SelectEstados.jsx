import React from 'react'

const SelectEstados = (props) => {

    const { name, className, onChange, onBlur } = props
    const data = [
        {
            "id": 1,
            "cve_ent": "01",
            "nom_ent": "Aguascalientes",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Ags. "
        },
        {
            "id": 2,
            "cve_ent": "02",
            "nom_ent": "Baja California",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "B.C. "
        },
        {
            "id": 3,
            "cve_ent": "03",
            "nom_ent": "Baja California Sur",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "B.C.S. "
        },
        {
            "id": 4,
            "cve_ent": "04",
            "nom_ent": "Campeche",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Camp. "
        },
        {
            "id": 5,
            "cve_ent": "05",
            "nom_ent": "Coahuila de Zaragoza",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Coah. "
        },
        {
            "id": 6,
            "cve_ent": "06",
            "nom_ent": "Colima",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Col. "
        },
        {
            "id": 7,
            "cve_ent": "07",
            "nom_ent": "Chiapas",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Chis. "
        },
        {
            "id": 8,
            "cve_ent": "08",
            "nom_ent": "Chihuahua",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Chih. "
        },
        {
            "id": 9,
            "cve_ent": "09",
            "nom_ent": "Ciudad de México",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "C.D.Mx. "
        },
        {
            "id": 10,
            "cve_ent": "10",
            "nom_ent": "Durango",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Dgo. "
        },
        {
            "id": 11,
            "cve_ent": "11",
            "nom_ent": "Guanajuato",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Gto. "
        },
        {
            "id": 12,
            "cve_ent": "12",
            "nom_ent": "Guerrero",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Gro. "
        },
        {
            "id": 13,
            "cve_ent": "13",
            "nom_ent": "Hidalgo",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Hgo. "
        },
        {
            "id": 14,
            "cve_ent": "14",
            "nom_ent": "Jalisco",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Jal. "
        },
        {
            "id": 15,
            "cve_ent": "15",
            "nom_ent": "México",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Edo. Méx."
        },
        {
            "id": 16,
            "cve_ent": "16",
            "nom_ent": "Michoacán de Ocampo",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Mich. "
        },
        {
            "id": 17,
            "cve_ent": "17",
            "nom_ent": "Morelos",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Mor. "
        },
        {
            "id": 18,
            "cve_ent": "18",
            "nom_ent": "Nayarit",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Nay. "
        },
        {
            "id": 19,
            "cve_ent": "19",
            "nom_ent": "Nuevo León",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "N.L. "
        },
        {
            "id": 20,
            "cve_ent": "20",
            "nom_ent": "Oaxaca",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Oax. "
        },
        {
            "id": 21,
            "cve_ent": "21",
            "nom_ent": "Puebla",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Pue. "
        },
        {
            "id": 22,
            "cve_ent": "22",
            "nom_ent": "Querétaro",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Qro. "
        },
        {
            "id": 23,
            "cve_ent": "23",
            "nom_ent": "Quintana Roo",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Q. Roo."
        },
        {
            "id": 24,
            "cve_ent": "24",
            "nom_ent": "San Luis Potosí",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "S.L.P. "
        },
        {
            "id": 25,
            "cve_ent": "25",
            "nom_ent": "Sinaloa",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Sin. "
        },
        {
            "id": 26,
            "cve_ent": "26",
            "nom_ent": "Sonora",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Son. "
        },
        {
            "id": 27,
            "cve_ent": "27",
            "nom_ent": "Tabasco",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tab. "
        },
        {
            "id": 28,
            "cve_ent": "28",
            "nom_ent": "Tamaulipas",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tamps. "
        },
        {
            "id": 29,
            "cve_ent": "29",
            "nom_ent": "Tlaxcala",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Tlax. "
        },
        {
            "id": 30,
            "cve_ent": "30",
            "nom_ent": "Veracruz de Ignacio de la Llave",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Ver. "
        },
        {
            "id": 31,
            "cve_ent": "31",
            "nom_ent": "Yucatán",
            "created_at": "2017-12-18 18:56:36.000",
            "updated_at": "2017-12-18 18:56:36.000",
            "abreviacion": "Yuc. "
        },
        {
            "id": 32,
            "cve_ent": "32",
            "nom_ent": "Zacatecas",
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