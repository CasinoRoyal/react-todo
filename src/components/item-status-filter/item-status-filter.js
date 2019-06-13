import React, { Component } from 'react';

import './item-status-filter.css';

const buttonsFilter = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.onFilterClick = (e) => {
      this.props.onFilterTask(e.target.textContent.toLowerCase())
    }
  }

  render() {
    const buttons = buttonsFilter.map(({ name, label }) => {
      const isActive = this.props.filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button type="button"
                className={`btn ${clazz}`}
                onClick={this.onFilterClick}
                key={name}>{name}</button>        
      );
    });


    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}