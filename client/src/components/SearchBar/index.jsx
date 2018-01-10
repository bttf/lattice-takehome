import React, { PureComponent } from 'react';
import './styles.scss';

const _debounce = require('lodash/debounce');

export default class SearchBar extends PureComponent {
  constructor(props){
    super(props);

    this.searchMovies = _debounce(props.searchMovies, 400);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const searchQuery = event.target.value;
    this.searchMovies(searchQuery);
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" onChange={this.changeHandler} placeholder="Search movie titles" />
      </div>
    );
  }
}
