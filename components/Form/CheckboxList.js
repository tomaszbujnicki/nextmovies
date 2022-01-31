import React from 'react';
import styles from './CheckboxList.module.css';

const CheckboxList = ({ arr, name, propValue, propLabel }) => {
  return (
    <ul className={styles.root}>
      {arr.map((item) => (
        <li key={item[propValue]} className={styles.checkboxItem}>
          <CheckboxInput
            id={`${name}_${item[propValue]}`}
            name={name}
            value={item[propValue]}
          />
          <CheckboxLabel
            htmlFor={`${name}_${item[propValue]}`}
            label={item[propLabel]}
          />
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;

const CheckboxLabel = ({ label, htmlFor }) => (
  <label className={styles.checkboxItemLabel} htmlFor={htmlFor}>
    {label}
  </label>
);

const CheckboxInput = ({ id, name, value }) => (
  <input
    className={styles.checkboxItemInput}
    type="checkbox"
    id={id}
    name={name}
    value={value}
  />
);
