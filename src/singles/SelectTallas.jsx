import React from "react";

export const SelectTallas = (props) => {
  const { name, onChange, className } = props;
  return (
    <select
      className={className}
      onChange={onChange}
      name={name}
    >
      <option value="">---Seleccione---</option>
      <option value={1}>CH</option>
      <option value={2}>M</option>
      <option value={3}>G</option>
      <option value={4}>XG</option>
    </select>
  );
};

export const SelectTallasGorras = (props) => {
  const { name, onChange, defaultValue, className, onBlur } = props;

  return (
    <select
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={defaultValue}
    >
      <option value="">---Seleccione---</option>
      <option value={10}>CH - M</option>
      <option value={11}>G - XG</option>
    </select>
  );
};

export const SelectTallasPantalon = (props) => {
  const { name, onChange, defaultValue, className } = props;

  return (
    <select
      className={className}
      onChange={onChange}
      name={name}
      value={defaultValue}
    >
      <option value="">---Seleccione---</option>
      <option value={5}>28</option>
      <option value={6}>30</option>
      <option value={7}>32</option>
      <option value={8}>34</option>
      <option value={9}>36</option>
    </select>
  );
};

export const SelectTallasMexicanas = (props) => {
  const { name, onChange, defaultValue, className, onBlur } = props;

  return (
    <select
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={defaultValue}
    >
      <option value="">---Seleccione---</option>
    </select>
  );
};

export function SelectTallasAmericanas(props) {
  const { name, onChange, defaultValue, className, onBlur } = props;

  return (
    <select
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={defaultValue}
    >
      <option value="">---Seleccione---</option>
    </select>
  );
}
