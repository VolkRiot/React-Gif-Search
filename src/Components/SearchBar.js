import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.wait = null;
  }

  onInputChange(term) {
    clearInterval(this.wait)
    this.wait = setTimeout(() => {
      this.props.onTermChange(term);
    }, 1000)
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Enter text to search for gifs!"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
