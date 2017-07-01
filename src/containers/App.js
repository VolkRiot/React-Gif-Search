import React, { Component } from 'react';
import GifsTemp from '../Components/GifsTemp';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../Components/SearchBar';
import '../style/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
