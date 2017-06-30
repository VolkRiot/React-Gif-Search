import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import SearchBar from './Components/SearchBar';
import GifList from './Components/GifList';
import GifModal from './Components/GifModal';
import './style/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
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
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList
          gifs={this.state.gifs}
          onGifSelect={selectedGif => this.openModal(selectedGif)}
        />
        <GifModal
          modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={() => this.closeModal()}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
