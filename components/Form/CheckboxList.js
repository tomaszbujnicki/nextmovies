import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import styles from './CheckboxList.module.css';

const CheckboxList = ({ values, arr, name, propValue, propLabel }) => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className={styles.root}>
          {arr.map((item) => (
            <label key={item[propValue]} className={styles.checkboxItemLabel}>
              <Field
                className={styles.checkboxItemInput}
                name={name}
                type="checkbox"
                value={item[propValue]}
                checked={values[name].includes(item[propValue])}
                onChange={(e) => {
                  if (e.target.checked) {
                    arrayHelpers.push(item[propValue]);
                  } else {
                    const idx = values[name].indexOf(item[propValue]);
                    arrayHelpers.remove(idx);
                  }
                }}
              />
              <span className={styles.checkboxItemSpan}>{item[propLabel]}</span>
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default CheckboxList;
