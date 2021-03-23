/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { sortedTasksSelector } from '../tasks.selectors';

const TasksList = ({ tasks, getTasksList, updateTask, deleteTask, createTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            handleTaskStatusChange={updateTask}
            handleTaskDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    tasks: sortedTasksSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);
