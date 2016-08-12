import React, { Component, PropTypes } from 'react';
import * as d3 from "d3";


import { TerrainViewController } from './TerrainViewController.js';

export default class Terrain extends Component {

    constructor(props, context){
        super(props, context);

       this.state = {
            map: ["foo"],
            message: "Generated Map"
        }
    }
 
    drawTerrain( id ){

        let self = this;

        let svg = d3.select("#terrainContainer").append("svg")
                                                    .attr("width", "100%")
                                                    .attr("height", "100%");


        let terrain = new TerrainViewController();        
        let defaultParams = terrain.getDefaultParams(); 
        terrain.doMap( svg, defaultParams);


    }

    componentDidMount(){
         this.drawTerrain(); 

         let store = this.props.store;


         console.log("Terrain componentDidMount state: ", this.state);

         let self = this;

         let handleChange = function(){

             let state = store.getState();

             console.log("Terrain handleChange state: ", state);

             let message = "Generated Another Random Map";

             self.setState({message}); 

         }




         store.subscribe(handleChange)
    } 

    componentWillMount() {
    
    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){


        

        //let state = getState(); 

        console.log("Terrain componentDidUpdate state: ", this.state);

        d3.select('svg').remove();

        this.drawTerrain();
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
                <div>
                    <div>
                        <p>{ this.state.message }</p>
                    </div>
                    <div style={styles.terrain} ref="terrain" id="terrainContainer"></div>
                </div>
               )
    }
}

Terrain.propTypes = {
  actions: PropTypes.object.isRequired
};

