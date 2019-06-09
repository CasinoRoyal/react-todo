import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './todo-list';
import SearchPanel from './search-panel';
import AppHeader from './app-header';

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));