import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MapActions from '../actions/MapActions';

import Header from './header/Header';
import Tools from './tools/Tools';
import Terrain from '../components/terrain/Terrain';

import './App.css';

class App extends Component {
  
  render() {
    
    const { actions, store } = this.props;

    console.log("App store: ", this.props.store);
    
    return (
       <div className="App">
        <Header ref="header"/>
        <Tools actions={actions} ref="tools"/>
        <Terrain store={store} actions={actions} ref="terrain"/>
      </div>
    );
  }

}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    //map: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MapActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
