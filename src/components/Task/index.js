import React from 'react';
import cx from 'classnames';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Task.module.scss';

const Task = (props) => {
  const { className, setDoneTask, deleteTask, changeTask,
    task: { id, body, isDone }
  } = props;

  const style = cx(isDone ? styles.checked : styles.notChecked, className);

  const handleChangeInput = ({ target: { value, id } }) => changeTask(Number(id), value);

  return (
    <div className={style}>
      <input className={styles.input} type='text' value={body} onChange={handleChangeInput} id={id} />
      <div className={styles.checkBox} onClick={() => setDoneTask(id)}>
        <DoneIcon />
      </div>
      <div className={styles.button} onClick={() => deleteTask(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Task;