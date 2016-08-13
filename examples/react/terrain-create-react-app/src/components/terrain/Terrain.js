import React, { Component, PropTypes } from 'react';
import * as d3 from "d3";

import { TerrainViewController } from './TerrainViewController.js';

import './Terrain.css';

export default class Terrain extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            map: ["default"],
            message: "Message here....",
            messageVisible: false,
            saved: false,
        }
    }

    draw(){
        this.toggleMessage("Please Wait... Generating Random Map");

        this.drawTerrain();
    }
 
    drawTerrain( id ){

        setTimeout( () => {

            console.log("Terrain drawTerrain");

            d3.select("svg").remove();

            let svg = d3.select("#terrainContainer").append("svg")
                                                        .attr("width", "100%")
                                                        .attr("height", "100%");

            let terrain = new TerrainViewController();        
            let defaultParams = terrain.getDefaultParams(); 
            terrain.doMap( svg, defaultParams); // feels like this should be moved to a web worker since it takes 4-5 seconds... 

        }, 500 );

    }

    toggleMessage( message ){

        this.setState({ messageVisible: true, message: message });

        setTimeout( () => {

            this.setState({ messageVisible: false });

        }, 4000);
    }

    componentDidMount(){

        this.draw();
        
        let store = this.props.store;

        console.log("Terrain componentDidMount state: ", this.state);

        let self = this;

        let handleChange = function(){

             let state = store.getState();
             console.log("Terrain handleChange arguments: ", arguments);
             console.log("Terrain handleChange state: ", state);

             let message = "Generated Another Random Map";

             self.draw();
        }

        store.subscribe(handleChange);

        
    } 

    componentWillMount() {

    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){

        console.log("Terrain componentDidUpdate state: ", this.state);


    }    

    render(){

        let styles = {
          terrain: {
            width: "800px",
            height: "800px",
            margin: "0 auto"
          } 
        }

        return (
                <div className="terrainComponent">
                   
                    { this.state.messageVisible ?  
                        <div className="terrainMessages">
                            <p>{ this.state.message }</p>
                        </div> : null }

                    <div style={styles.terrain} ref="terrain" id="terrainContainer"></div>
                </div>
               )
    }
}

Terrain.propTypes = {
  actions: PropTypes.object.isRequired
};

