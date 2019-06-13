import React, { Component } from 'react';

export default class UserPanel extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = { label: '' };

    this.onInputChange = (e) => {
      this.setState({
        label: e.target.value
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAddTask(this.state.label);
      this.setState({
        label: ''
      });
    };
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               placeholder="Add task"
               required="required"
               onChange={this.onInputChange} 
               value={this.state.label} />
        <button type="submit" 
                className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
};