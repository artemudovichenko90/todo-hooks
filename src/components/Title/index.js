import React from 'react';
import cx from 'classnames';
import styles from './Title.module.scss';

const Title = (props) => {
  const { className } = props;

  const style = cx(styles.container, className);

  return (
    <h1 className={style}>
      AbacaxiGuy's Todo List
    </h1>
  );
}

export default Title;