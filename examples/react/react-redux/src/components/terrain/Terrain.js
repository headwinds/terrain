import React, { Component, PropTypes } from 'react';
import * as d3 from "d3";
import * as $ from "jquery";

import { TerrainViewController } from './TerrainViewController.js';

import './Terrain.css';

export default class Terrain extends Component {

    constructor(props, context){
        super(props, context);
        this.state = this.props.state;
        this.store = this.props.store;
    }

    export(){

        //saveAs(new Blob([SVG_DATA_HERE], {type:"application/svg+xml"}), "name.svg");

        $('body').append(
            $('<a>')
              .attr('href-lang', 'image/svg+xml')
              .attr('href', 'data:image/svg+xml;utf8,' +  unescape($('svg')[0].outerHTML))
              .text('Download')
        );

        
    }
 
    drawTerrain( id ){

        let self = this;

        //self.props.actions.mapGenerationStartAction();

        // need a timeout to allow the message shield time to render first

        setTimeout( () => {

              d3.select("svg").remove();

                let svg = d3.select("#terrainContainer").append("svg")
                                                            .attr("width", "100%")
                                                            .attr("height", "100%");

                let terrain = new TerrainViewController( self.props.actions );        
                let defaultParams = terrain.getDefaultParams();

                let width = 800;
                let height = width;


                terrain.doMap( svg, defaultParams, width, height); // feels like this should be moved to a web worker since it takes 4-5 seconds... 

        }, 1000); 

      
       
    }

    componentDidMount(){

        this.drawTerrain();
       
    } 

    componentWillMount() {

    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(){

        //console.log("Terrain componentDidUpdate state: ", this.state);
       if (this.props.state.generatingMap) this.drawTerrain();

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
                    <div style={styles.terrain} ref="terrain" id="terrainContainer"></div>
                </div>
               )
    }
}

Terrain.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

