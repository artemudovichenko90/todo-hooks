import React from 'react';
import cx from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { schemaValidation } from './../../utils';
import styles from './AddTaskInput.module.scss';

const AddTaskInput = (props) => {
  const { className, addTask } = props;

  const submit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  }

  const style = cx(styles.container, className);

  return (
    <Formik
      onSubmit={submit}
      initialValues={{ body: '' }}
      validationSchema={schemaValidation.SCHEMA_TASK}
    >
      <Form className={style}>
        <label className={styles.label}>
          <Field className={styles.input} name='body' />
          <ErrorMessage className={styles.error} name='body' component="div" />
          <button className={styles.submit}> <LocalHospitalIcon className={styles.plus} /></button>
        </label>
      </Form>
    </Formik>
  );
}

export default AddTaskInput; 
