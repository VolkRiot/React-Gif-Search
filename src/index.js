import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import SearchBar from './Components/SearchBar';
import GifList from './Components/GifList';
import './style/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(
      /\s/g,
      '+'
    )}&api_key=64031ee213914402ad2a1d49b11c3b79`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
