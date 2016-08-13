import { types } from '../constants/ToolsActionTypes';

export function generateRandomMapAction( mapName ) {
  return {
    type: types.RANDOM_MAP_START,
    mapName: mapName,
  };
}

export function dispatchGenerateRandomMap( mapName ) {
  return (dispatch, getState) => {
    
    //const { map } = 

    let state = getState(); // state of the entire app
    let action = generateRandomMapAction( mapName );

    console.log("ToolsActions dispatchGenerateRandomMap state: ", state);

    dispatch( action );

     
  };
}