import React from 'react';

import TodoItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, 
                    onToggleDone, onToggleImportant }) => {
  
  const arr = todos.map((item) => {
    /**
    * Short ver.:
    *
    * const { id, ...otherProps } = item;
    * return (
    *   <li key={id}>
    *     <TodoItem {...otherProps} /> 
    *   </li>
    * );
    */

    return (
      <li key={item.id} className="list-group-item">
        <TodoItem name={item.name}
                  done={item.done}
                  important={item.important} 
                  onDeleted={() => onDeleted(item.id)}
                  onToggleDone={() => onToggleDone(item.id)}
                  onToggleImportant={() => onToggleImportant(item.id)}/> 
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { arr }
    </ul>
  );
};

export default TodoList;
