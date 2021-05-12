import React, { useState } from "react";
import axiosClient from "../config/axios";
import { isEmpty } from "lodash";
const SelectBancos = (props) => {
  const { name, className, onChange } = props;
  const [data, setData] = useState([]);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_BACKEN_URL}list_bancos`,
  };
  if (isEmpty(data)) {
    axiosClient(config).then(async (response) => {
      const data = await response.data.data;
      setData(data);
    });
  }
  return (
    <select name={name} className={className} onChange={onChange}>
      <option value="">--Seleccione--</option>
      {typeof data != "undefined" &&
        data.map((item, index) => (
          <option key={index} value={item.id}>
            {item.nombre}
          </option>
        ))}
    </select>
  );
};
export default SelectBancos;
