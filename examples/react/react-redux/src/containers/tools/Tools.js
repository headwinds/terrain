import React, { Component, PropTypes } from 'react';

import "./Tools.css";

export default class Tools extends Component {

	constructor(props, context){
		super(props, context);

		this.state = this.props.state;
        this.store = this.props.store;
	}

	componentWillMount() {
    
    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){

    }  

	onGenerateClick(){

		let newMap = this.state.mapName;
		this.props.actions.requestRandomMapAction(newMap);
	}


	onExportClick(){
		this.props.actions.exportCommand();
	}

	onMapNameChangeHandler(){
		
	}

	render() {
		return(
			<div className="toolsContainer">
				<p className="cominsoon">Tools</p>
				<button className="enabled" onClick={() => {this.onGenerateClick();}}>Generate</button>
				<button className="enabled" onClick={() => {this.onExportClick();}}>Export</button>
				<label>Name: </label>
				<input type="text" placeholder={this.state.mapName} value={this.state.mapName} onChange={() => {this.onMapNameChangeHandler();}} />
			</div>
		);
	}

}

Tools.propTypes = {
	actions: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	state: PropTypes.object.isRequired
};