import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }

    this.onSearchChange = (e) => {
      const term = e.target.value;
      this.setState({ term })
      this.props.onSearchTask(term);
    }

  }

  render() {
    return (
      <input type="text"
             placeholder="Search"
             className="form-control search-input"
             onChange={this.onSearchChange} />
    );
  }
};