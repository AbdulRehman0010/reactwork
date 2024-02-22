import React from 'react';

function Task({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} readOnly />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
    </li>
  );
}

export default Task;