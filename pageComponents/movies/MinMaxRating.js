import { useRef, useEffect } from 'react';
import styles from './MinMaxRating.module.css';
import Rating from '../../components/Rating';
import { useField } from 'formik';

export const MinMaxRating = () => {
  const refMin = useRef(null);
  const refMax = useRef(null);

  const [fieldMin, metaMin, helpersMin] = useField('vote_average_gte');
  const { value: min } = metaMin;
  const { setValue: setMin } = helpersMin;

  const [fieldMax, metaMax, helpersMax] = useField('vote_average_lte');
  const { value: max } = metaMax;
  const { setValue: setMax } = helpersMax;

  useEffect(() => {
    refMin.current.value = min;
    refMax.current.value = max;
  }, [min, max]);

  return (
    <>
      <div className={styles.ratingContainer}>
        <label htmlFor="rating" className={styles.ratingLabel}>
          Minimum Stars
        </label>
        <input
          ref={refMin}
          type="range"
          name="vote_average_gte"
          min="1"
          max="10"
          step="1"
          className={styles.ratingInput}
          onChange={({ target }) => {
            setMin(+target.value);
            if (+target.value > max) {
              refMax.current.value = +target.value;
              setMax(+target.value);
            }
          }}
        />
        <Rating rating={min} />
      </div>
      <div className={styles.ratingContainer}>
        <label htmlFor="rating" className={styles.ratingLabel}>
          Maximum Stars
        </label>
        <input
          ref={refMax}
          type="range"
          name="vote_average_lte"
          min="1"
          max="10"
          step="1"
          className={styles.ratingInput}
          onChange={({ target }) => {
            setMax(+target.value);
            if (+target.value < min) {
              refMin.current.value = +target.value;
              setMin(+target.value);
            }
          }}
        />
        <Rating rating={max} />
      </div>
    </>
  );
};
