import { useRef, useState, useEffect } from 'react';
import styles from './MinMaxRating.module.css';
import Rating from '../../components/Rating';

export const MinMaxRating = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const refMin = useRef(null);
  const refMax = useRef(null);

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
          id="rating"
          name="rating"
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
          id="rating"
          name="rating"
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
