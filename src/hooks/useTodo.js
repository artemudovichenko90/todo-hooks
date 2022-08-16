import React, { useState } from 'react';

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);
  return {
    tasks,
    setTasks,
    addTask: (value) => {
      const newTask = {
        isDone: false,
        id: Date.now(),
        body: value.body
      };
      setTasks([...tasks, newTask])
    },
    deleteTask: (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    },
    changeTask: (id, body) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, body } : task))
    },
    setDoneTask: (id) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
    }
  }
};

export default useTodo;
