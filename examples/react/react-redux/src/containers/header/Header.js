import React, { Component } from 'react';


export default class Header extends Component {

	constructor(props, context){
		super(props, context);
        this.store = this.props.store;
	}

	render() {
		let styles = {
	      header: {
	        height: "60px",
	      }     
	    }
		return(
			 <div style={styles.header} className="App-header">
          		<h2>Generate Fantasy Maps with React and D3</h2>
				<p>Get the source on Github! <a href="https://github.com/mewo2/terrain" target="_blank">Original</a> || <a href="https://github.com/headwinds/terrain" target="_blank">Fork</a></p>
        	</div>
		);
	}

}