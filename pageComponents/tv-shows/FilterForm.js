import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import {
  Fieldset,
  CheckboxList,
  RadioGroup,
  Submit,
} from '../../components/Form';
import { MinMaxRating } from './MinMaxRating';
import { TV_GENRES_ARRAY, TV_CERTIFICATION_ARRAY } from '../../constants';
import Keywords from './Keywords';
import { SecondaryButton } from '../../components/Button';
import styles from './FilterForm.module.css';

const emptyValues = {
  with_genres: [],
  with_keywords: [],
  certification: '',
  primary_release_date_gte: '',
  primary_release_date_lte: '',
  vote_average_gte: '1.00',
  vote_average_lte: '10',
};

const FilterForm = ({ handleSubmit, query }) => {
  console.log('FilterForm');

  const initialValues = {};

  if (query.with_genres) {
    initialValues.with_genres = query.with_genres
      .split(',')
      .map((item) => parseInt(item, 10))
      .filter((item) => Number.isInteger(item));
  }

  if (query.certification) {
    if (
      TV_CERTIFICATION_ARRAY.some(
        (item) => item.certification === query.certification
      )
    ) {
      initialValues.certification = query.certification;
    }
  }

  if (query['vote_average.gte']) {
    initialValues.vote_average_gte = query['vote_average.gte'];
  }

  if (query['vote_average.lte']) {
    initialValues.vote_average_lte = query['vote_average.lte'];
  }

  const fromYear = query['primary_release_date.gte'];
  if (fromYear?.length === 10) {
    initialValues.primary_release_date_gte = fromYear.slice(0, 4);
  }

  const toYear = query['primary_release_date.lte'];
  if (toYear?.length === 10) {
    initialValues.primary_release_date_lte = toYear.slice(0, 4);
  }

  console.log(query);

  return (
    <div>
      <Formik
        initialValues={{ ...emptyValues, ...initialValues }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
          console.log(values);
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
                      ...emptyValues,
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
                arr={TV_GENRES_ARRAY}
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
                  name="primary_release_date_gte"
                  minLength="4"
                  maxLength="4"
                  pattern="[0-9]{4}"
                  autoComplete="off"
                />
                <label className={styles.yearLabel}>To:</label>
                <Field
                  className={styles.yearInput}
                  type="text"
                  name="primary_release_date_lte"
                  minLength="4"
                  maxLength="4"
                  pattern="[0-9]{4}"
                  autoComplete="off"
                />
              </div>
            </Fieldset>

            <Fieldset title="Rating">
              <MinMaxRating
                bin={values.vote_average_gte}
                bax={values.vote_average_lte}
              />
            </Fieldset>

            <Fieldset title="Keywords">
              <Keywords />
            </Fieldset>

            <Fieldset title="Certification">
              <RadioGroup
                values={values}
                arr={TV_CERTIFICATION_ARRAY}
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
