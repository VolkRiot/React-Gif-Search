import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './../store/configureStore';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../containers/Headers';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';

const PrivateRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === true
          ? <Component {...props} />
          : <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />}
    />
  );
};

const PublicRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === false
          ? <Component {...props} />
          : <Redirect to="/favorites" />}
    />
  );
};

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <PublicRoute
              authenticated={this.props.authenticated}
              path="/signup"
              component={Signup}
            />
            <PublicRoute
              authenticated={this.props.authenticated}
              path="/login"
              component={Login}
            />
            <PrivateRoute
              authenticated={this.props.authenticated}
              path="/favorites"
              component={Favorites}
            />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(App);
