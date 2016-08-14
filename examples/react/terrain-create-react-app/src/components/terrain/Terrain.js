import React, { Component, PropTypes } from 'react';
import * as d3 from "d3";

import { TerrainViewController } from './TerrainViewController.js';

import './Terrain.css';

export default class Terrain extends Component {

    constructor(props, context){
        super(props, context);

        this.store = this.props.store;

        this.state = {
            message: "Please Wait... Generating Random Map",
            messageVisible: true,
            saved: false,
            generatingMap: false,
            mapComplete: false,
        }

        let store = this.store;

        console.log("Terrain constructor: ", this.state);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        //this.componentDidUpdate = this.componentDidUpdate.bind(this);

        store.subscribe(this.onChangeHandler);
    }

    onChangeHandler(){

        let self = this;

        let appState = self.store.getState();
        let terrainState = appState.terrainState;    
        
        console.log("Terrain handleChange terrainState: ", terrainState);

        if ( terrainState.mapComplete ) terrainState.messageVisible = false;
            
        self.setState(terrainState);


    }

    draw(){
       
        this.drawTerrain();
    }
 
    drawTerrain( id ){

        let self = this;

        setTimeout( () => {

            console.log("Terrain drawTerrain");

            d3.select("svg").remove();

            let svg = d3.select("#terrainContainer").append("svg")
                                                        .attr("width", "100%")
                                                        .attr("height", "100%");

            let terrain = new TerrainViewController( self.props.actions );        
            let defaultParams = terrain.getDefaultParams();

            let width = 800;
            let height = width;


            terrain.doMap( svg, defaultParams, width, height); // feels like this should be moved to a web worker since it takes 4-5 seconds... 

        }, 500 );

    }

    componentDidMount(){

        console.log("Terrain componentDidMount")

        this.draw();
       
    } 

    componentWillMount() {

    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){

        //console.log("Terrain componentDidUpdate state: ", this.state);

        let appState = this.store.getState();
        let terrainState = appState.terrainState; 

        console.log("Terrain componentDidUpdate terrainState: ", terrainState);

        if (terrainState.generatingMap && !terrainState.mapComplete) this.draw();

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

