import React, { Component } from 'react';
import GifsTemp from '../Components/GifsTemp';
import GifList from '../Components/GifList';
import GifModal from '../Components/GifModal';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../Components/SearchBar';
import '../style/app.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList
          gifs={this.props.gifs.data}
          onGifSelect={selectedGif =>
            this.props.actions.openModal({ selectedGif })}
        />
        <GifModal
          modalIsOpen={this.props.modalIsOpen}
          selectedGif={this.props.selectedGif}
          onRequestClose={() => this.props.actions.closeModal()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
