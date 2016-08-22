import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TerrainActions from '../actions/TerrainActions';
import * as ToolsActions from '../actions/ToolsActions';

import MessageShield from '../components/messageshield/MessageShield';
import Header from './header/Header';
import Tools from './tools/Tools';
import Terrain from '../components/terrain/Terrain';

import './App.css';

class App extends Component {

  constructor(props, context){
    super(props,context)

    this.store = this.props.store;
    this.state = this.store.getState().appState;

  }
  
  render() {
    
    const { toolsActions, terrainActions, messageShieldState, terrainState, toolsState, store } = this.props;

    console.log("App store: ", this.props);
    
    return (
       <div className="App">
        <MessageShield store={store} state={messageShieldState} />
        <Header store={store} ref="header"/>
        <Tools store={store} state={toolsState} actions={toolsActions} ref="tools"/>
        <Terrain store={store} state={terrainState} actions={terrainActions} ref="terrain"/>
      </div>
    );
  }

}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    toolsState: state.toolsState,
    terrainState: state.terrainState,
    messageShieldState: state.messageShieldState
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
