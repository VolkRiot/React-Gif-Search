import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';

class App extends Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
