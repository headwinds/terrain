import React, { Component, PropTypes } from 'react';

export default class Tools extends Component {

	constructor(props, context){
		super(props, context);

		this.state = {
			map: ["hello"]
		}
	}

	componentWillMount() {
    
    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){
        

        //let state = getState(); 

        console.log("Tools componentDidUpdate state: ", this.state);
    }  

	onGenerateClick(){
		console.log("Tools onGenerateClick ", this);

		let newMap = "world";

		//generateRandomMap(state = 0, action, map)
		this.props.actions.dispatchGenerateRandomMap(newMap);

		let map = this.state.map.concat(newMap);

		this.setState({ map });
	}

	onSaveClick(){

	}

	onExportClick(){

	}

	render() {
		return(
			<div className="toolsContainer">
				<p className="cominsoon">Tools - coming soons - would include:</p>
				<button className="enabled" onClick={() => {this.onGenerateClick();}}>Generate</button>
				<button className="disabled" onClick={() => {this.onSaveClick();}}>Save</button>
				<button className="disabled" onClick={() => {this.onExportClick();}}>Export</button>
			</div>
		);
	}

}

Tools.propTypes = {
	actions: PropTypes.object.isRequired
};