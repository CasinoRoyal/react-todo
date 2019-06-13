import React, { Component } from 'react';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import UserPanel from '../user-panel';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.configData = (name) => {
      return {
        name,
        important: false,
        done: false,
        id: Math.floor(Math.random() * 10000)
      };
    };

    this.state = {
      todoData: [
        this.configData('drink coffee'),
        this.configData('create react app'),
        this.configData('get some noizzzzze')
      ],
      term: '',
      filter: 'all'
    };


    this.deleteItem = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

        return {
          todoData: newArray
        };
      });
    };

    this.addItem = (value) => {
      this.setState(({todoData}) => {
        const newTask = this.configData(value);

        const newArray = [newTask, ...todoData];

        return {
          todoData: newArray
        };
      });
    };

    this.toggleState = (arr, id, property) => {

        const idx = arr.findIndex((el) => el.id === id);

        const oldObj = arr[idx];
        const newObj = { ...oldObj, [property]: !oldObj[property] };
        return [...arr.slice(0, idx), 
                          newObj, ...arr.slice(idx + 1)];
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleState(todoData, id, 'done')
        };
      });
    };

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleState(todoData, id, 'important')
        };
      });      
    };

    this.searchTask = (items, term) => {
      if (!term) return items;

      return items.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
      });
    };

    this.onSearchTask = (value) => {
      this.setState({
        term: value
      })
    }

    this.filterTask = (items, filter) => {
      switch(filter) {
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done)
        case 'done':
          return items.filter((item) => item.done)
        default:
          return items;       
      }
    }

    this.onFilterTask = (value) => {
      this.setState({
        filter: value
      })
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleData = this.filterTask(this.searchTask(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchTask={this.onSearchTask} />
          <ItemStatusFilter onFilterTask={this.onFilterTask}
                            filter={filter} />
        </div>

        <TodoList todos={visibleData} 
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant} />

        <UserPanel onAddTask={this.addItem} />
      </div>
    );
  }
};