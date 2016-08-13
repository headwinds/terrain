import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TerrainActions from '../actions/TerrainActions';
import * as ToolsActions from '../actions/ToolsActions';

import Header from './header/Header';
import Tools from './tools/Tools';
import Terrain from '../components/terrain/Terrain';

import './App.css';

class App extends Component {

  constructor(props, context){
    super(props,context)

    this.state = {
      mapGenerated: false,
    }

  }
  
  render() {
    
    const { toolsActions, terrainActions, store } = this.props;

    console.log("App store: ", this.props.store);
    
    return (
       <div className="App">
        <Header ref="header"/>
        <Tools actions={toolsActions} ref="tools"/>
        <Terrain store={store} actions={terrainActions} ref="terrain"/>
      </div>
    );
  }

}

App.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    //map: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return {
    terrainActions: bindActionCreators(TerrainActions, dispatch),
    toolsActions: bindActionCreators(ToolsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
