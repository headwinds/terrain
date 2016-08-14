import React, { Component, PropTypes } from 'react';

export default class Tools extends Component {

	constructor(props, context){
		super(props, context);

		this.state = {
			map: ["hello"],
			activeTool: "none",
			mapName: "default"
		}

		this.store = this.props.store;
	}

	componentWillMount() {
    
    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){
        
        //let state = getState(); 

        //console.log("Tools componentDidUpdate state: ", this.state);
    }  

	onGenerateClick(){
		//console.log("Tools onGenerateClick ", this);

		let newMap = this.state.mapName;

		//generateRandomMap(state = 0, action, map)
		this.props.actions.generateRandomMapToolCommand(newMap);

		//let map = this.state.map.concat(newMap);

		//this.setState({ map });
	}

	onSaveClick(){

	}

	onExportClick(){

	}

	onMapNameChangeHandler(){
		
	}

	render() {
		return(
			<div className="toolsContainer">
				<p className="cominsoon">Tools</p>
				<button className="enabled" onClick={() => {this.onGenerateClick();}}>Generate</button>
				<button className="disabled" onClick={() => {this.onSaveClick();}}>Save</button>
				<button className="disabled" onClick={() => {this.onExportClick();}}>Export</button>

				<label>Map Name: </label>
				<input value={this.state.mapName} onChange={() => {this.onMapNameChangeHandler();}} />
			</div>
		);
	}

}

Tools.propTypes = {
	actions: PropTypes.object.isRequired
};