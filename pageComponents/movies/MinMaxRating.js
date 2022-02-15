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

  console.log(min, max);

  useEffect(() => {
    refMin.current.value = min;
    refMax.current.value = max;
  }, [min, max]);

  return (
    <div className={styles.root}>
      <div className={styles.ratingContainer}>
        <label htmlFor="rating" className={styles.ratingLabel}>
          Minimum Stars
        </label>
        <input
          ref={refMin}
          type="range"
          name="vote_average_gte"
          min="1"
          max="9.19"
          step="0.91"
          className={styles.ratingInput}
          onChange={({ target }) => {
            const valueMinStr = target.value;
            setMin(valueMinStr);

            const valueMinNum = parseFloat(valueMinStr.slice(0, 3));
            if (valueMinNum >= parseFloat(max)) {
              const valueMaxNum = valueMinNum + 0.9;
              const valueMaxStr = parseFloat(valueMaxNum).toPrecision(2);
              setMax(valueMaxStr);
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
          min="1.9"
          max="10"
          step="0.9"
          className={styles.ratingInput}
          onChange={({ target }) => {
            const valueMaxStr = target.value;
            setMax(valueMaxStr);

            const valueMaxNum = parseFloat(valueMaxStr);
            if (valueMaxNum < parseFloat(min)) {
              const level = Math.trunc(valueMaxNum) - 1;
              const valueMinNum = valueMaxNum - 0.9 + level * 0.01;
              const valueMinStr = parseFloat(valueMinNum).toPrecision(3);
              setMin(valueMinStr);
            }
          }}
        />
        <Rating rating={max} />
      </div>
    </div>
  );
};
