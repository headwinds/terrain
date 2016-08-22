import React, { Component, PropTypes } from 'react';

import './MessageShield.css';

export default class MessageShield extends Component {

	constructor(props, context){
		super(props, context);
        this.state = this.props.state;
        this.store = this.props.store;
    }

	componentWillMount() {

    }

    componentWillUnmount() {
    
    }

    componentDidMount(){
       
    }

    componentDidUpdate(){
        
    }

	render() {
		return(
			<div className="messageShieldContainer">
                <div className="shieldMessage">
                   { this.props.state.messageVisible ? <p>{ this.props.state.message }</p> : null }
                </div> 
                { this.props.state.messageVisible ? <div className="shield"></div> : null }
            </div>
		);
	}

}

MessageShield.propTypes = {
  store: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};