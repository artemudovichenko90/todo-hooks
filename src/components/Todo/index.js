import React, { useState } from 'react';
import Task from './../Task';
import Title from './../Title';
import { useTodo } from './../../hooks';
import { taskStatus } from '../../constants';
import AddTaskInput from './../AddTaskInput';
import FilterSelect from './../FilterSelect';
import styles from './Todo.module.scss';


const Todo = () => {
  const [filter, setFilter] = useState(taskStatus.ALL);
  const { tasks, addTask, setDoneTask, deleteTask, changeTask } = useTodo(
    [
      {
        id: 1,
        body: 'work1',
        isDone: false
      },
      {
        id: 2,
        body: 'work2',
        isDone: true
      },
      {
        id: 3,
        body: 'work3',
        isDone: false
      }
    ]
  );

  const filterTasks = () => {
    switch (filter) {
      case taskStatus.ALL:
        return tasks;
      case taskStatus.DONE:
        return tasks.filter(task => task.isDone);
      case taskStatus.NOT_DONE:
        return tasks.filter(task => !task.isDone);
    }
  };

  const renderTasks = () => {
    return filterTasks().map((task) =>
      <li key={task.id}>
        <Task
          task={task}
          deleteTask={deleteTask}
          changeTask={changeTask}
          className={styles.task}
          setDoneTask={setDoneTask}
        />
      </li>)
  };

  return (
    <div>
      <Title className={styles.title} />
      <div className={styles.config}>
        <AddTaskInput addTask={addTask} className={styles.taskInput} />
        <FilterSelect filter={filter} setFilter={setFilter} />
      </div>
      <ul>{renderTasks()}</ul>
    </div>
  );
}

export default Todo;
