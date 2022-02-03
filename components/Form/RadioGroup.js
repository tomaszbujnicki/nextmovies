import React from 'react';
import { Field } from 'formik';
import styles from './RadioGroup.module.css';

const RadioGroup = ({ arr, name, propValue, propLabel }) => {
  return (
    <div className={styles.root}>
      {arr.map((item) => (
        <label key={item[propValue]} className={styles.checkboxItemLabel}>
          <Field
            className={styles.checkboxItemInput}
            name={name}
            type="radio"
            value={item[propValue]}
          />
          <span className={styles.checkboxItemSpan}>{item[propLabel]}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
