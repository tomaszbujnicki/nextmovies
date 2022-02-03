import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import {
  Fieldset,
  CheckboxList,
  RadioGroup,
  Submit,
} from '../../components/Form';
import { MinMaxRating } from './MinMaxRating';
import { MOVIE_GENRES_ARRAY, MOVIE_CERTIFICATION_ARRAY } from '../../constants';
import Keywords from './Keywords';
import { SecondaryButton } from '../../components/Button';
import styles from './FilterForm.module.css';

const FilterForm = ({ handleSubmit, query }) => {
  console.log('FilterForm');

  let with_genres = [];

  if (query.with_genres) {
    with_genres = query.with_genres
      .split(',')
      .map((item) => parseInt(item, 10))
      .filter((item) => Number.isInteger(item));
  }

  let certification;

  if (query.certification) {
    if (
      MOVIE_CERTIFICATION_ARRAY.some(
        (item) => item.certification === query.certification
      )
    ) {
      certification = query.certification;
    }
    console.log(certification);
  }

  return (
    <div>
      <Formik
        initialValues={{ with_genres, certification }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          resetForm,

          handleSubmit,

          isSubmitting,
        }) => (
          <Form>
            <header className={styles.header}>
              <h2>Filters</h2>

              <SecondaryButton
                size="sm"
                type="button"
                onClick={() =>
                  resetForm({
                    values: {
                      with_genres: [],
                    },
                  })
                }
              >
                Clear all
              </SecondaryButton>
            </header>

            <Fieldset title="Genres">
              <CheckboxList
                values={values}
                arr={MOVIE_GENRES_ARRAY}
                name="with_genres"
                propValue="id"
                propLabel="name"
              />
            </Fieldset>

            <Fieldset title="Year">
              <div className={styles.year}>
                <label className={styles.yearLabel}>From:</label>
                <Field
                  className={styles.yearInput}
                  type="text"
                  name="primary_release_date-gte"
                  minLength="4"
                  maxLength="4"
                  pattern="[0-9]{4}"
                  autocomplete="off"
                />
                <label className={styles.yearLabel}>To:</label>
                <Field
                  className={styles.yearInput}
                  type="text"
                  name="primary_release_date-lte"
                  minLength="4"
                  maxLength="4"
                  pattern="[0-9]{4}"
                  autocomplete="off"
                />
              </div>
            </Fieldset>

            <Fieldset title="Rating">
              <MinMaxRating />
            </Fieldset>

            <Fieldset title="Keywords">
              <Keywords />
            </Fieldset>

            <Fieldset title="Certification">
              <RadioGroup
                values={values}
                arr={MOVIE_CERTIFICATION_ARRAY}
                name="certification"
                propValue="certification"
                propLabel="certification"
                propTooltip="meaning"
              />
            </Fieldset>

            <Submit isDisabled={isSubmitting}>Submit</Submit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterForm;
